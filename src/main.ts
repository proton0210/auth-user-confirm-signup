import * as cdk from "aws-cdk-lib";
import { CfnOutput, aws_cognito as Cognito, RemovalPolicy } from "aws-cdk-lib";
import { AttributeType, BillingMode, Table } from "aws-cdk-lib/aws-dynamodb";
import * as iam from "aws-cdk-lib/aws-iam";
import { Runtime } from "aws-cdk-lib/aws-lambda";
import { NodejsFunction } from "aws-cdk-lib/aws-lambda-nodejs";
import { Construct } from "constructs";
import * as path from "path";

/**
 * Interface representing the properties for the CognitoConstruct.
 */
export interface AuthStackProps {
  /**
   * Lambda function to be triggered after user confirmation.
   */
  readonly addUserPostConfirmation: NodejsFunction;
}

/**
 * Custom construct for creating AWS Cognito resources including User Pool and User Pool Client.
 */
export class CognitoConstruct extends Construct {
  /**
   * The User Pool created by this construct.
   */
  public readonly userPool: Cognito.IUserPool;

  /**
   * The User Pool Client created by this construct.
   */
  public readonly userPoolClient: Cognito.IUserPoolClient;

  /**
   * Constructs a new instance of the CognitoConstruct.
   * @param scope The parent construct.
   * @param id The construct ID.
   * @param props The properties for the construct.
   */
  constructor(scope: Construct, id: string, props: AuthStackProps) {
    super(scope, id);
    this.userPool = this.createUserPool(props);
    this.userPoolClient = this.createWebClient();
    this.output();
  }

  /**
   * Creates the Cognito User Pool with specified properties.
   * @param props The properties for creating the User Pool.
   * @returns The created User Pool.
   */

  createUserPool(props: AuthStackProps) {
    const userPool = new Cognito.UserPool(this, "UserPool", {
      userPoolName: "USER-POOL",
      selfSignUpEnabled: true,
      autoVerify: {
        email: true,
      },
      passwordPolicy: {
        minLength: 8,
        requireLowercase: true,
        requireUppercase: true,
        requireDigits: true,
        requireSymbols: true,
      },
      signInAliases: {
        email: true,
      },
      standardAttributes: {
        email: {
          required: true,
          mutable: true,
        },
      },
      customAttributes: {
        name: new Cognito.StringAttribute({
          minLen: 3,
          maxLen: 20,
        }),
      },
      lambdaTriggers: {
        postConfirmation: props.addUserPostConfirmation,
      },
    });
    return userPool;
  }

  /**
   * Creates the Cognito User Pool Client associated with the User Pool.
   * @returns The created User Pool Client.
   */
  createWebClient() {
    const client = new Cognito.UserPoolClient(this, "USER-POOL-CLIENT", {
      userPool: this.userPool,
      authFlows: {
        userPassword: true,
        userSrp: true,
      },
    });
    return client;
  }

  /**
   * Outputs the User Pool and User Pool Client IDs as CloudFormation outputs.
   */
  output() {
    new cdk.CfnOutput(this, "PoolId", {
      value: this.userPool.userPoolId,
    });
    new cdk.CfnOutput(this, "PoolClientId", {
      value: this.userPoolClient.userPoolClientId,
    });
  }
}

/**
 * Interface representing the properties for the LambdaConstruct.
 */
export interface LambdaConstructProps {
  /**
   * The DynamoDB table where user data will be stored.
   */
  readonly usersTable: Table;

  /**
   * The AWS region in which the resources will be deployed.
   */
  readonly region: string;
}

/**
 * Custom construct for creating AWS Lambda functions associated with DynamoDB.
 */
export class LambdaConstruct extends Construct {
  /**
   * The AWS Lambda function responsible for adding users to the DynamoDB table.
   */
  public readonly addUserToTableFunc: NodejsFunction;

  /**
   * Constructs a new instance of the LambdaConstruct.
   * @param scope The parent construct.
   * @param id The construct ID.
   * @param props The properties for the construct.
   */
  constructor(scope: Construct, id: string, props: LambdaConstructProps) {
    super(scope, id);
    this.addUserToTableFunc = this.addUserToUsersTable(props);
  }

  /**
   * Creates the AWS Lambda function responsible for adding users to the DynamoDB table.
   * @param props The properties for creating the Lambda function.
   * @returns The created Lambda function.
   */
  private addUserToUsersTable(props: LambdaConstructProps): NodejsFunction {
    const func = new NodejsFunction(this, "adduserFunc", {
      functionName: "addUserFunc",
      runtime: Runtime.NODEJS_20_X,
      handler: "handler",
      entry: path.join(
        __dirname,
        "./functions/PostConfirmSignUpFunction/index.js"
      ),
      environment: {
        TABLE_NAME: props.usersTable.tableName as string,
        REGION: props.region as string,
      },
    });

    // Grants permission to put items in the DynamoDB table
    func.addToRolePolicy(
      new iam.PolicyStatement({
        actions: ["dynamodb:PutItem"],
        resources: [props.usersTable.tableArn as string],
      })
    );

    // Outputs the function name and ARN as CloudFormation outputs
    new CfnOutput(this, "addUserToUsersTableFuncName", {
      value: func.functionName,
    });
    new CfnOutput(this, "addUserToUsersTableFuncArn", {
      value: func.functionArn,
    });

    return func;
  }
}

/**
 * Interface representing the properties for the UserTableConstruct.
 */
export interface UserTableConstructProps {
  /**
   * The name of the DynamoDB table. If not provided, a default name ("UsersTable") will be used.
   */
  readonly tableName?: string;
}

/**
 * Custom construct for creating a DynamoDB table to store user data.
 */
export class UserTableConstruct extends Construct {
  /**
   * The DynamoDB table created by this construct to store user data.
   */
  public readonly usersTable: Table;

  /**
   * Constructs a new instance of the UserTableConstruct.
   * @param scope The parent construct.
   * @param id The construct ID.
   * @param props The properties for the construct.
   */
  constructor(scope: Construct, id: string, props?: UserTableConstructProps) {
    super(scope, id);
    this.usersTable = this.createTable(props);
  }

  /**
   * Creates the DynamoDB table for storing user data with specified properties.
   * @param props The properties for creating the DynamoDB table.
   * @returns The created DynamoDB table.
   */
  private createTable(props?: UserTableConstructProps): Table {
    const table = new Table(this, "UsersTable", {
      tableName: props?.tableName ?? "UsersTable",
      partitionKey: {
        name: "UserID",
        type: AttributeType.STRING,
      },
      billingMode: BillingMode.PAY_PER_REQUEST,
      removalPolicy: RemovalPolicy.DESTROY,
    });

    // Outputs the DynamoDB table name and ARN as CloudFormation outputs
    new CfnOutput(this, "UsersTableName", {
      value: table.tableName,
    });
    new CfnOutput(this, "UsersTableArn", {
      value: table.tableArn,
    });

    return table;
  }
}

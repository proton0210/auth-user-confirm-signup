import { CfnOutput } from "aws-cdk-lib";
import { Table } from "aws-cdk-lib/aws-dynamodb";
import * as iam from "aws-cdk-lib/aws-iam";
import { Runtime } from "aws-cdk-lib/aws-lambda";
import { NodejsFunction } from "aws-cdk-lib/aws-lambda-nodejs";
import { Construct } from "constructs";
import * as path from "path";
/**
 * Interface representing the properties for the LambdaConstruct.
 */
interface LambdaConstructProps {
  /**
   * The DynamoDB table where user data will be stored.
   */
  usersTable: Table;

  /**
   * The AWS region in which the resources will be deployed.
   */
  region: string;
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
      runtime: Runtime.NODEJS_14_X,
      handler: "handler",
      entry: path.join(
        __dirname,
        "../functions/PostConfirmSignUpFunction/index.ts"
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

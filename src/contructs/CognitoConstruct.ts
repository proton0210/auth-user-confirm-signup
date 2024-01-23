import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
import { aws_cognito as Cognito } from "aws-cdk-lib";
import { NodejsFunction } from "aws-cdk-lib/aws-lambda-nodejs";

/**
 * Interface representing the properties for the CognitoConstruct.
 */
interface AuthStackProps {
  /**
   * Lambda function to be triggered after user confirmation.
   */
  addUserPostConfirmation: NodejsFunction;
}

/**
 * Custom construct for creating AWS Cognito resources including User Pool and User Pool Client.
 */
export class CognitoConstruct extends Construct {
  /**
   * The User Pool created by this construct.
   */
  public readonly UserPool: Cognito.IUserPool;

  /**
   * The User Pool Client created by this construct.
   */
  public readonly UserPoolClient: Cognito.IUserPoolClient;

  /**
   * Constructs a new instance of the CognitoConstruct.
   * @param scope The parent construct.
   * @param id The construct ID.
   * @param props The properties for the construct.
   */
  constructor(scope: Construct, id: string, props: AuthStackProps) {
    super(scope, id);
    this.UserPool = this.createUserPool(props);
    this.UserPoolClient = this.createWebClient();
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
      userPool: this.UserPool,
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
      value: this.UserPool.userPoolId,
    });
    new cdk.CfnOutput(this, "PoolClientId", {
      value: this.UserPoolClient.userPoolClientId,
    });
  }
}

import * as cdk from "aws-cdk-lib";
import { UserTableConstruct } from "./contructs/UserTableConstruct";
import { LambdaConstruct } from "./contructs/LambdaConstruct";
import { CognitoConstruct } from "./contructs/CognitoConstruct";
import { Construct } from "constructs";
/**
 * Interface representing the properties for the AuthConfirmStack.
 */
interface AuthConfirmStackProps extends cdk.StackProps {
  /**
   * The AWS region in which the resources will be deployed.
   */
  region: string;
}

/**
 * AWS CDK stack for setting up authentication confirmation resources.
 */
export class AuthConfirmStack extends cdk.Stack {
  /**
   * Constructs a new instance of the AuthConfirmStack.
   * @param scope The parent construct.
   * @param id The construct ID.
   * @param props The properties for the stack.
   */
  constructor(scope: Construct, id: string, props: AuthConfirmStackProps) {
    super(scope, id, props);
    this.initialize(props);
  }

  /**
   * Initializes the stack by creating the necessary constructs.
   * @param props The properties for the stack.
   */
  initialize(props: AuthConfirmStackProps): void {
    // Create DynamoDB table construct
    const databaseConstruct = new UserTableConstruct(this, "UserTable");

    // Create Lambda function construct
    const lambdaConstruct = new LambdaConstruct(this, "LambdaConstruct", {
      usersTable: databaseConstruct.usersTable,
      region: props.region,
    });

    // Create Cognito construct with Lambda function as a trigger
    const cognitoConstruct = new CognitoConstruct(this, "CognitoConstruct", {
      addUserPostConfirmation: lambdaConstruct.addUserToTableFunc,
    });
  }
}

import * as cdk from "aws-cdk-lib";

import { Construct } from "constructs";
import { CognitoConstruct, LambdaConstruct, UserTableConstruct } from "./main";
/**
 * Interface representing the properties for the AuthConfirmStack.
 */
export interface AuthConfirmStackProps extends cdk.StackProps {
  /**
   * The AWS region in which the resources will be deployed.
   */
  readonly region: string;
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
    new CognitoConstruct(this, "CognitoConstruct", {
      addUserPostConfirmation: lambdaConstruct.addUserToTableFunc,
    });
  }
}

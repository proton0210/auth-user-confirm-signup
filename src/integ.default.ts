import * as dotenv from "dotenv";

// Load environment variables from a .env file
dotenv.config();

import { App } from "aws-cdk-lib";
import { AuthConfirmStack } from "./authStack";

// Create an AWS CDK App instance
const app = new App();

/**
 * AWS CDK stack for setting up authentication confirmation resources.
 * The stack uses environment variables loaded using `dotenv.config()`.
 */
const authStack = new AuthConfirmStack(app, "AuthConfirmStack", {
  region: process.env.REGION as string,
});

export default authStack;

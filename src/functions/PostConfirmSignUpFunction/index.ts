import { PostConfirmationConfirmSignUpTriggerEvent } from "aws-lambda";
import { DynamoDBClient, PutItemCommand } from "@aws-sdk/client-dynamodb";
import { marshall } from "@aws-sdk/util-dynamodb";

/**
 * Environment variable representing the AWS region.
 */
const REGION = process.env.REGION;

/**
 * Environment variable representing the DynamoDB table name.
 */
const TABLE_NAME = process.env.TABLE_NAME;

// Check if REGION environment variable is set
if (!REGION) {
  throw new Error("Environment variable REGION not set");
}

// Check if TABLE_NAME environment variable is set
if (!TABLE_NAME) {
  throw new Error("Environment variable TABLE_NAME not set");
}

/**
 * DynamoDB client for interacting with the DynamoDB service.
 */
const client = new DynamoDBClient({
  region: REGION as string,
});

/**
 * Lambda function handler for the Post Confirmation Confirm Sign-Up trigger.
 * @param event The Post Confirmation Confirm Sign-Up trigger event.
 * @returns A Promise with the result of the function execution.
 */
exports.handler = async function (
  event: PostConfirmationConfirmSignUpTriggerEvent
): Promise<string> {
  // Get the current date and time in ISO format
  const date = new Date();
  const isoDate = date.toISOString();

  // Log the incoming event for debugging purposes
  console.log("EVENT: \n" + JSON.stringify(event, null, 2));

  // Customize parameters for DynamoDB based on the event
  const params = {
    TableName: TABLE_NAME as string,
    Item: marshall({
      UserID: event.request.userAttributes.sub,
      Email: event.request.userAttributes.email,
      Name: event.request.userAttributes.name,
      CreatedAt: isoDate,
      __typename: "User",
    }),
  };

  try {
    // Send a PutItem command to DynamoDB to add the user data
    await client.send(new PutItemCommand(params));
  } catch (error) {
    // Throw an error if there is a problem with the DynamoDB operation
    throw new Error(error);
    console.log(error);
  }

  // Return a success message
  return "success";
};

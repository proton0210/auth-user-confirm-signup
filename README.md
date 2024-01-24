
Easily set Auth in your AWS app with this construct
# Authentication Setup Details

The authentication setup involves:

## AWS Cognito User Pool and Client:

- Creation of an AWS Cognito user pool and client for user authentication.
- Utilization of a Lambda function as a post-confirmation trigger.

## Lambda Function for Email Verification Logic:

- Implementation of a Lambda function that executes logic after the user verifies their email.

## DynamoDB User Table:

- Creation of a DynamoDB user table to store user data.
- Use of the UserID as the partition key, derived from the Cognito user sub.

Feel free to customize and expand upon this setup based on your specific project requirements.

Install esbuild in your cdk project : `npm i esbuild`

# Architecture and Use case!


![architecture](https://github.com/proton0210/auth-user-confirm-signup/assets/80155713/9fa0cb0a-4919-48e4-a84e-7ea43553a22c)

![usecase1](https://github.com/proton0210/auth-user-confirm-signup/assets/80155713/2ebda23e-373f-426d-9a88-ea249a6d96f6)

![deployed state](https://github.com/proton0210/auth-user-confirm-signup/assets/80155713/ac69a449-b260-49a5-ad46-0a5b1251968a)

[Blog post Creating auth with fronend](https://dev.to/proton0210/setting-up-auth-using-aws-cdk-cognito-nextjs-14-and-aws-amplify-v6-9b3)

[Learning Cognito User and Identity Pool](https://main.d3m5kt17r5818r.amplifyapp.com/)

[Learning DynamoDB](https://www.learndynamoapi.com/)


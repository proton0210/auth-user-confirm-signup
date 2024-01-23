import { awscdk } from "projen";
const project = new awscdk.AwsCdkConstructLibrary({
  author: "Vidit Shah",
  authorAddress: "vidit0210@protonmail.com",
  cdkVersion: "2.122.0",
  defaultReleaseBranch: "main",
  jsiiVersion: "~5.3.0",
  name: "auth-user-confirm-signup",
  projenrcTs: true,
  repositoryUrl: "https://github.com/proton0210/auth-user-confirm-signup.git",
  eslint: false,
  githubOptions: {
    mergify: false,
  },

  deps: [
    "@aws-sdk/client-dynamodb",
    "@aws-sdk/util-dynamodb",
    "path",
    "dotenv",
  ],
  devDeps: ["@types/aws-lambda", "esbuild", "@types/node"],
  bundledDeps: [
    "@aws-sdk/client-dynamodb",
    "@aws-sdk/util-dynamodb",
    "path",
    "dotenv",
  ],
});
const common_exclude = ["cdk.out", "cdk.context.json", ".env"];
project.npmignore!.exclude(...common_exclude);
project.gitignore.exclude(...common_exclude);
project.synth();

import { CfnOutput, RemovalPolicy } from "aws-cdk-lib";
import {
  AttributeType,
  ITable,
  Table,
  BillingMode,
} from "aws-cdk-lib/aws-dynamodb";
import { Construct } from "constructs";
/**
 * Interface representing the properties for the UserTableConstruct.
 */
interface UserTableConstructProps {
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

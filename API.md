# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CognitoConstruct <a name="CognitoConstruct" id="auth-user-confirm-signup.CognitoConstruct"></a>

Custom construct for creating AWS Cognito resources including User Pool and User Pool Client.

#### Initializers <a name="Initializers" id="auth-user-confirm-signup.CognitoConstruct.Initializer"></a>

```typescript
import { CognitoConstruct } from 'auth-user-confirm-signup'

new CognitoConstruct(scope: Construct, id: string, props: AuthStackProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#auth-user-confirm-signup.CognitoConstruct.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The parent construct. |
| <code><a href="#auth-user-confirm-signup.CognitoConstruct.Initializer.parameter.id">id</a></code> | <code>string</code> | The construct ID. |
| <code><a href="#auth-user-confirm-signup.CognitoConstruct.Initializer.parameter.props">props</a></code> | <code><a href="#auth-user-confirm-signup.AuthStackProps">AuthStackProps</a></code> | The properties for the construct. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="auth-user-confirm-signup.CognitoConstruct.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The parent construct.

---

##### `id`<sup>Required</sup> <a name="id" id="auth-user-confirm-signup.CognitoConstruct.Initializer.parameter.id"></a>

- *Type:* string

The construct ID.

---

##### `props`<sup>Required</sup> <a name="props" id="auth-user-confirm-signup.CognitoConstruct.Initializer.parameter.props"></a>

- *Type:* <a href="#auth-user-confirm-signup.AuthStackProps">AuthStackProps</a>

The properties for the construct.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#auth-user-confirm-signup.CognitoConstruct.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#auth-user-confirm-signup.CognitoConstruct.createUserPool">createUserPool</a></code> | Creates the Cognito User Pool with specified properties. |
| <code><a href="#auth-user-confirm-signup.CognitoConstruct.createWebClient">createWebClient</a></code> | Creates the Cognito User Pool Client associated with the User Pool. |
| <code><a href="#auth-user-confirm-signup.CognitoConstruct.output">output</a></code> | Outputs the User Pool and User Pool Client IDs as CloudFormation outputs. |

---

##### `toString` <a name="toString" id="auth-user-confirm-signup.CognitoConstruct.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `createUserPool` <a name="createUserPool" id="auth-user-confirm-signup.CognitoConstruct.createUserPool"></a>

```typescript
public createUserPool(props: AuthStackProps): UserPool
```

Creates the Cognito User Pool with specified properties.

###### `props`<sup>Required</sup> <a name="props" id="auth-user-confirm-signup.CognitoConstruct.createUserPool.parameter.props"></a>

- *Type:* <a href="#auth-user-confirm-signup.AuthStackProps">AuthStackProps</a>

The properties for creating the User Pool.

---

##### `createWebClient` <a name="createWebClient" id="auth-user-confirm-signup.CognitoConstruct.createWebClient"></a>

```typescript
public createWebClient(): UserPoolClient
```

Creates the Cognito User Pool Client associated with the User Pool.

##### `output` <a name="output" id="auth-user-confirm-signup.CognitoConstruct.output"></a>

```typescript
public output(): void
```

Outputs the User Pool and User Pool Client IDs as CloudFormation outputs.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#auth-user-confirm-signup.CognitoConstruct.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="auth-user-confirm-signup.CognitoConstruct.isConstruct"></a>

```typescript
import { CognitoConstruct } from 'auth-user-confirm-signup'

CognitoConstruct.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="auth-user-confirm-signup.CognitoConstruct.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#auth-user-confirm-signup.CognitoConstruct.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#auth-user-confirm-signup.CognitoConstruct.property.userPool">userPool</a></code> | <code>aws-cdk-lib.aws_cognito.IUserPool</code> | The User Pool created by this construct. |
| <code><a href="#auth-user-confirm-signup.CognitoConstruct.property.userPoolClient">userPoolClient</a></code> | <code>aws-cdk-lib.aws_cognito.IUserPoolClient</code> | The User Pool Client created by this construct. |

---

##### `node`<sup>Required</sup> <a name="node" id="auth-user-confirm-signup.CognitoConstruct.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `userPool`<sup>Required</sup> <a name="userPool" id="auth-user-confirm-signup.CognitoConstruct.property.userPool"></a>

```typescript
public readonly userPool: IUserPool;
```

- *Type:* aws-cdk-lib.aws_cognito.IUserPool

The User Pool created by this construct.

---

##### `userPoolClient`<sup>Required</sup> <a name="userPoolClient" id="auth-user-confirm-signup.CognitoConstruct.property.userPoolClient"></a>

```typescript
public readonly userPoolClient: IUserPoolClient;
```

- *Type:* aws-cdk-lib.aws_cognito.IUserPoolClient

The User Pool Client created by this construct.

---


### LambdaConstruct <a name="LambdaConstruct" id="auth-user-confirm-signup.LambdaConstruct"></a>

Custom construct for creating AWS Lambda functions associated with DynamoDB.

#### Initializers <a name="Initializers" id="auth-user-confirm-signup.LambdaConstruct.Initializer"></a>

```typescript
import { LambdaConstruct } from 'auth-user-confirm-signup'

new LambdaConstruct(scope: Construct, id: string, props: LambdaConstructProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#auth-user-confirm-signup.LambdaConstruct.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The parent construct. |
| <code><a href="#auth-user-confirm-signup.LambdaConstruct.Initializer.parameter.id">id</a></code> | <code>string</code> | The construct ID. |
| <code><a href="#auth-user-confirm-signup.LambdaConstruct.Initializer.parameter.props">props</a></code> | <code><a href="#auth-user-confirm-signup.LambdaConstructProps">LambdaConstructProps</a></code> | The properties for the construct. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="auth-user-confirm-signup.LambdaConstruct.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The parent construct.

---

##### `id`<sup>Required</sup> <a name="id" id="auth-user-confirm-signup.LambdaConstruct.Initializer.parameter.id"></a>

- *Type:* string

The construct ID.

---

##### `props`<sup>Required</sup> <a name="props" id="auth-user-confirm-signup.LambdaConstruct.Initializer.parameter.props"></a>

- *Type:* <a href="#auth-user-confirm-signup.LambdaConstructProps">LambdaConstructProps</a>

The properties for the construct.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#auth-user-confirm-signup.LambdaConstruct.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="auth-user-confirm-signup.LambdaConstruct.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#auth-user-confirm-signup.LambdaConstruct.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="auth-user-confirm-signup.LambdaConstruct.isConstruct"></a>

```typescript
import { LambdaConstruct } from 'auth-user-confirm-signup'

LambdaConstruct.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="auth-user-confirm-signup.LambdaConstruct.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#auth-user-confirm-signup.LambdaConstruct.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#auth-user-confirm-signup.LambdaConstruct.property.addUserToTableFunc">addUserToTableFunc</a></code> | <code>aws-cdk-lib.aws_lambda_nodejs.NodejsFunction</code> | The AWS Lambda function responsible for adding users to the DynamoDB table. |

---

##### `node`<sup>Required</sup> <a name="node" id="auth-user-confirm-signup.LambdaConstruct.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `addUserToTableFunc`<sup>Required</sup> <a name="addUserToTableFunc" id="auth-user-confirm-signup.LambdaConstruct.property.addUserToTableFunc"></a>

```typescript
public readonly addUserToTableFunc: NodejsFunction;
```

- *Type:* aws-cdk-lib.aws_lambda_nodejs.NodejsFunction

The AWS Lambda function responsible for adding users to the DynamoDB table.

---


### UserTableConstruct <a name="UserTableConstruct" id="auth-user-confirm-signup.UserTableConstruct"></a>

Custom construct for creating a DynamoDB table to store user data.

#### Initializers <a name="Initializers" id="auth-user-confirm-signup.UserTableConstruct.Initializer"></a>

```typescript
import { UserTableConstruct } from 'auth-user-confirm-signup'

new UserTableConstruct(scope: Construct, id: string, props?: UserTableConstructProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#auth-user-confirm-signup.UserTableConstruct.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The parent construct. |
| <code><a href="#auth-user-confirm-signup.UserTableConstruct.Initializer.parameter.id">id</a></code> | <code>string</code> | The construct ID. |
| <code><a href="#auth-user-confirm-signup.UserTableConstruct.Initializer.parameter.props">props</a></code> | <code><a href="#auth-user-confirm-signup.UserTableConstructProps">UserTableConstructProps</a></code> | The properties for the construct. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="auth-user-confirm-signup.UserTableConstruct.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The parent construct.

---

##### `id`<sup>Required</sup> <a name="id" id="auth-user-confirm-signup.UserTableConstruct.Initializer.parameter.id"></a>

- *Type:* string

The construct ID.

---

##### `props`<sup>Optional</sup> <a name="props" id="auth-user-confirm-signup.UserTableConstruct.Initializer.parameter.props"></a>

- *Type:* <a href="#auth-user-confirm-signup.UserTableConstructProps">UserTableConstructProps</a>

The properties for the construct.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#auth-user-confirm-signup.UserTableConstruct.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="auth-user-confirm-signup.UserTableConstruct.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#auth-user-confirm-signup.UserTableConstruct.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="auth-user-confirm-signup.UserTableConstruct.isConstruct"></a>

```typescript
import { UserTableConstruct } from 'auth-user-confirm-signup'

UserTableConstruct.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="auth-user-confirm-signup.UserTableConstruct.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#auth-user-confirm-signup.UserTableConstruct.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#auth-user-confirm-signup.UserTableConstruct.property.usersTable">usersTable</a></code> | <code>aws-cdk-lib.aws_dynamodb.Table</code> | The DynamoDB table created by this construct to store user data. |

---

##### `node`<sup>Required</sup> <a name="node" id="auth-user-confirm-signup.UserTableConstruct.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `usersTable`<sup>Required</sup> <a name="usersTable" id="auth-user-confirm-signup.UserTableConstruct.property.usersTable"></a>

```typescript
public readonly usersTable: Table;
```

- *Type:* aws-cdk-lib.aws_dynamodb.Table

The DynamoDB table created by this construct to store user data.

---


## Structs <a name="Structs" id="Structs"></a>

### AuthStackProps <a name="AuthStackProps" id="auth-user-confirm-signup.AuthStackProps"></a>

Interface representing the properties for the CognitoConstruct.

#### Initializer <a name="Initializer" id="auth-user-confirm-signup.AuthStackProps.Initializer"></a>

```typescript
import { AuthStackProps } from 'auth-user-confirm-signup'

const authStackProps: AuthStackProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#auth-user-confirm-signup.AuthStackProps.property.addUserPostConfirmation">addUserPostConfirmation</a></code> | <code>aws-cdk-lib.aws_lambda_nodejs.NodejsFunction</code> | Lambda function to be triggered after user confirmation. |

---

##### `addUserPostConfirmation`<sup>Required</sup> <a name="addUserPostConfirmation" id="auth-user-confirm-signup.AuthStackProps.property.addUserPostConfirmation"></a>

```typescript
public readonly addUserPostConfirmation: NodejsFunction;
```

- *Type:* aws-cdk-lib.aws_lambda_nodejs.NodejsFunction

Lambda function to be triggered after user confirmation.

---

### LambdaConstructProps <a name="LambdaConstructProps" id="auth-user-confirm-signup.LambdaConstructProps"></a>

Interface representing the properties for the LambdaConstruct.

#### Initializer <a name="Initializer" id="auth-user-confirm-signup.LambdaConstructProps.Initializer"></a>

```typescript
import { LambdaConstructProps } from 'auth-user-confirm-signup'

const lambdaConstructProps: LambdaConstructProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#auth-user-confirm-signup.LambdaConstructProps.property.region">region</a></code> | <code>string</code> | The AWS region in which the resources will be deployed. |
| <code><a href="#auth-user-confirm-signup.LambdaConstructProps.property.usersTable">usersTable</a></code> | <code>aws-cdk-lib.aws_dynamodb.Table</code> | The DynamoDB table where user data will be stored. |

---

##### `region`<sup>Required</sup> <a name="region" id="auth-user-confirm-signup.LambdaConstructProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

The AWS region in which the resources will be deployed.

---

##### `usersTable`<sup>Required</sup> <a name="usersTable" id="auth-user-confirm-signup.LambdaConstructProps.property.usersTable"></a>

```typescript
public readonly usersTable: Table;
```

- *Type:* aws-cdk-lib.aws_dynamodb.Table

The DynamoDB table where user data will be stored.

---

### UserTableConstructProps <a name="UserTableConstructProps" id="auth-user-confirm-signup.UserTableConstructProps"></a>

Interface representing the properties for the UserTableConstruct.

#### Initializer <a name="Initializer" id="auth-user-confirm-signup.UserTableConstructProps.Initializer"></a>

```typescript
import { UserTableConstructProps } from 'auth-user-confirm-signup'

const userTableConstructProps: UserTableConstructProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#auth-user-confirm-signup.UserTableConstructProps.property.tableName">tableName</a></code> | <code>string</code> | The name of the DynamoDB table. |

---

##### `tableName`<sup>Optional</sup> <a name="tableName" id="auth-user-confirm-signup.UserTableConstructProps.property.tableName"></a>

```typescript
public readonly tableName: string;
```

- *Type:* string

The name of the DynamoDB table.

If not provided, a default name ("UsersTable") will be used.

---




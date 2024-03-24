# GraphQL API using AWS AppSync and CDK

You can read further [here in this medium article.](https://medium.com/@pedraohenrique/creating-a-graphql-api-using-aws-appsync-and-cdk-ebf9ee398c8a)

## Overview

This repo contains the code for a GraphQL API with all the CRUDs needed, keeping the developer in control of CI/CD, security, and other aspects using AWS CDK. The goal is to show how to code as little as possible and spend the energy on functions or features that MUST be customized.

## Solution Diagram

We will use AWS AppSync to create a complete GraphQL CRUD backend. Under the hood, GraphQL queries and mutations, Resolvers functions, DynamoDB tables, and an API Endpoint will be created without intervention. However, you will be able to access all outputs and use them in other stacks of your project.

![alt text for screen readers](https://cdn-images-1.medium.com/max/800/1*K4rM17h3VAOFcGVcCwlxIQ.png 'Solution Diagram')

## Getting Started

### Prerequisites

- NodeJs 18.x
- An AWS account - https://portal.aws.amazon.com/billing/signup
- AWS CLI configured - https://docs.aws.amazon.com/cdk/v2/guide/cli.html

### Instalation

1. Clone the repo
   ```sh
   git clone https://github.com/pedraohenrique/aws-cdk-appsync.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Setup AWS CLI. The instructions are [here](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-quickstart.html).

### Deploy

1. Deploy this stack to your default AWS account/region
   ```sh
   npx cdk deploy
   ```

### Usage

Check out the Output values in the terminal.

```sh
Outputs:
AwsCdkAppsyncStack.amplifyApiModelSchemaS3Uri =
AwsCdkAppsyncStack.awsAppsyncApiEndpoint =
AwsCdkAppsyncStack.awsAppsyncApiId =
AwsCdkAppsyncStack.awsAppsyncApiKey =
AwsCdkAppsyncStack.awsAppsyncAuthenticationType = API_KEY
AwsCdkAppsyncStack.awsAppsyncRegion = us-east-1
Stack ARN:
```

Set up your favourite GraphQL client to access the brand-new API. From the step above, you should get `awsAppsyncApiEndpoint` and `awsAppsyncApiKey`.

If you are using a post request, set the API Key correctly. Like this:

```sh
curl --location 'your-awsAppsyncApiEndpoint' \
--header 'Content-Type: application/json' \
--header 'X-Api-Key: your-awsAppsyncApiKey' \
```

import path = require('path');
import { Construct } from 'constructs';

import { Duration, Stack, StackProps } from 'aws-cdk-lib';
import {
  AmplifyGraphqlApi,
  AmplifyGraphqlDefinition,
} from '@aws-amplify/graphql-api-construct';

export class AwsCdkAppsyncStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const amplifyApi = new AmplifyGraphqlApi(this, 'aws-cdk-appsync-api', {
      definition: AmplifyGraphqlDefinition.fromFiles(
        path.join(__dirname, 'schema.graphql')
      ),
      authorizationModes: {
        defaultAuthorizationMode: 'API_KEY',
        apiKeyConfig: {
          expires: Duration.days(30),
        },
      },
    });
  }
}

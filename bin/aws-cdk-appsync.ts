#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { AwsCdkAppsyncStack } from '../lib/aws-cdk-appsync-stack';

const app = new cdk.App();
new AwsCdkAppsyncStack(app, 'AwsCdkAppsyncStack');

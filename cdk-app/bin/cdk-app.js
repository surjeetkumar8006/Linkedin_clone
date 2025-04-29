#!/usr/bin/env node

const cdk = require('aws-cdk-lib');
const { MyCdkAppStack } = require('../lib/my-cdk-app-stack');

const app = new cdk.App();
new MyCdkAppStack(app, 'MyCdkAppStack', {
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: process.env.CDK_DEFAULT_REGION,
  }
});

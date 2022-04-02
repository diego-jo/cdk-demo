#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { DemoAppStack } from '../lib';

const app = new cdk.App();
new DemoAppStack(app, 'unico-infra-base', {});
import * as sqs from 'aws-cdk-lib/aws-sqs';
import { Duration } from "aws-cdk-lib";
import { SSMStore } from "../helpers/ssm-store";
import { Construct } from 'constructs';

export class App1SQS {
  public readonly demoQueue: sqs.Queue

  constructor(scope: Construct) {
    this.demoQueue = new sqs.Queue(scope, 'demo-queue', {
      visibilityTimeout: Duration.seconds(300)
    });

    new SSMStore(
      scope,
      `/project/squad/app/${this.demoQueue.node.id}`,
      this.demoQueue.queueArn,
      'Demo queue arn'
    )
  }
}
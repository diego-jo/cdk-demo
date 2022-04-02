import * as sns from 'aws-cdk-lib/aws-sns';
import { SSMStore } from "../helpers/ssm-store";
import { Construct } from 'constructs';

export class App1SNS {
  public readonly demoTopic: sns.Topic

  constructor(scope: Construct) {
    this.demoTopic = new sns.Topic(scope, 'demo-topic', {
      displayName: 'demo-topic'
    })

    new SSMStore(
      scope,
      `/project/squad/app/${this.demoTopic.node.id}`,
      this.demoTopic.topicArn,
      'App1 topic arn'
    )
  }
}
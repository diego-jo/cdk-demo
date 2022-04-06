import * as sqs from 'aws-cdk-lib/aws-sqs'
import { Duration } from 'aws-cdk-lib'
import { SSMStore } from '../helpers/ssm-store'
import { Construct } from 'constructs'

export class App1SQS {
  public readonly demoQueue: sqs.Queue
  public readonly demoQueue2: sqs.Queue

  constructor (scope: Construct) {
    const SSM_PATH = '/project/squad/app/'

    this.demoQueue = new sqs.Queue(scope, 'demo-queue', {
      queueName: 'demo-queue',
      visibilityTimeout: Duration.seconds(30)
    })

    this.demoQueue2 = new sqs.Queue(scope, 'demo-queue2', {
      queueName: 'demo-queue2',
      visibilityTimeout: Duration.seconds(30)
    })

    new SSMStore(scope, `${SSM_PATH}${this.demoQueue.node.id}`, this.demoQueue.queueArn, 'Demo queue arn')
    new SSMStore(scope, `${SSM_PATH}${this.demoQueue2.node.id}`, this.demoQueue2.queueArn, 'Demo queue2 arn')
  }
}

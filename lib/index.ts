import {
  Stack,
  StackProps,
  aws_s3_notifications as s3n,
  aws_sns_subscriptions as snsSub,
  aws_lambda_event_sources as lambdaEventSource,
  Duration
} from 'aws-cdk-lib'
import { EventType } from 'aws-cdk-lib/aws-s3'
import { Construct } from 'constructs'
import { App1Lambda } from './lambdas/app1-lambda'

import { App1S3 } from './s3/app1-s3'
import { App1SNS } from './sns/app1-sns'
import { App1SQS } from './sqs/app1-sqs'

export class DemoAppStack extends Stack {
  constructor (scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props)

    const { demoQueue, demoQueue2 } = new App1SQS(this)
    const { demoBucket } = new App1S3(this)
    const { demoTopic } = new App1SNS(this)
    const { demoLambda } = new App1Lambda(this)

    demoBucket.addEventNotification(EventType.OBJECT_CREATED, new s3n.SnsDestination(demoTopic))
    demoTopic.addSubscription(new snsSub.SqsSubscription(demoQueue))
    demoTopic.addSubscription(new snsSub.SqsSubscription(demoQueue2))
    demoLambda.addEventSource(new lambdaEventSource.SqsEventSource(demoQueue, {
      batchSize: 1,
      maxBatchingWindow: Duration.seconds(60)
    }))
  }
}

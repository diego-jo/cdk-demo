import { Construct } from "constructs";
import { aws_lambda as lambda, Duration } from 'aws-cdk-lib'
import { SSMStore } from "../helpers/ssm-store";

export class App1Lambda {
  public readonly demoLambda: lambda.Function

  constructor(scope: Construct) {
    this.demoLambda = new lambda.Function(scope, 'demo-lambda', {
      runtime: lambda.Runtime.NODEJS_14_X,
      handler: 'lib/index.handler',
      code: new lambda.AssetCode('./lib/lambdas/anime'),
      timeout: Duration.minutes(5)
    })

    new SSMStore(

      scope,
      `/project/squad/app/${this.demoLambda.node.id}`,
      this.demoLambda.functionArn,
      'Demo lambda arn'
    )
  }
}
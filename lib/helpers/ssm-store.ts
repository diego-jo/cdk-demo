import * as ssm from 'aws-cdk-lib/aws-ssm'
import { Construct } from 'constructs';

export class SSMStore {
  constructor(
    scope: Construct,
    parameterName: string,
    parameterValue: string,
    description?: string
  ) {
    new ssm.StringParameter(scope, `${parameterName}-param`, {
      allowedPattern: '.*',
      description: description,
      parameterName: parameterName,
      stringValue: parameterValue,
      tier: ssm.ParameterTier.STANDARD
    })
  }
}

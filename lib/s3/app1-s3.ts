import { aws_s3 as s3 } from 'aws-cdk-lib'
import { Construct } from 'constructs'
import { SSMStore } from '../helpers/ssm-store'

export class App1S3 {
  public readonly demoBucket: s3.Bucket

  constructor (scope: Construct) {
    this.demoBucket = new s3.Bucket(scope, 'demo-store-bck', {
      blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL,
      bucketName: 'demo-store-bck',
      accessControl: s3.BucketAccessControl.PRIVATE
    })

    new SSMStore(
      scope,
      `/project/squad/app/${this.demoBucket.node.id}`,
      this.demoBucket.bucketArn,
      'Demo bucket arn'
    )
  }
}

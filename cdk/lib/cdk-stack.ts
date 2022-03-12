import { Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as cdk from 'aws-cdk-lib';
import { aws_s3 as s3 } from 'aws-cdk-lib';
import { aws_s3_deployment as s3deploy } from 'aws-cdk-lib';
import { aws_cloudfront as cloudfront } from 'aws-cdk-lib';
import { aws_cloudfront_origins as origins } from 'aws-cdk-lib';

export class CdkStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const gotalentoWebBucket = new s3.Bucket(this, 'gotalentoWebBucket', {
      websiteIndexDocument: 'index.html',
      publicReadAccess: true,
    })

    const gotalentoWebDistribution = new cloudfront.Distribution(this, 'gotalentoCloudfrontWebDistribution',{
      defaultBehavior: {
        origin: new origins.S3Origin(gotalentoWebBucket)
      }
    })

    new s3deploy.BucketDeployment(this, 'gotalentoDeployWebsite', {
      sources: [s3deploy.Source.asset('gotalento/dist')],
      destinationBucket: gotalentoWebBucket,
      destinationKeyPrefix: 'web/static', // optional prefix in destination bucket
      distributionPaths: ['/*']
    })
  }
}

import { Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { aws_s3 as s3 } from 'aws-cdk-lib';
import { aws_s3_deployment as s3deploy } from 'aws-cdk-lib';
import { aws_cloudfront as cloudfront } from 'aws-cdk-lib';
import { aws_cloudfront_origins as origins } from 'aws-cdk-lib';
import { aws_dynamodb as dynamodb } from 'aws-cdk-lib';
import { aws_lambda as lambda } from 'aws-cdk-lib';
import { aws_apigateway as apiGateway } from 'aws-cdk-lib';
import { aws_lambda_event_sources as lambdaEventSource } from 'aws-cdk-lib';
import { aws_iam as iam } from 'aws-cdk-lib';
import  * as cdk from 'aws-cdk-lib';

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
      sources: [s3deploy.Source.asset('../app/dist')],
      destinationBucket: gotalentoWebBucket,
      distribution: gotalentoWebDistribution,
      distributionPaths: ['/*']
    })

    const seekerTable = new dynamodb.Table(this,'gotalentoSeekerTable', {
      tableName: 'seeker',
      partitionKey: { name:'seekerID', type: dynamodb.AttributeType.STRING},
      stream: dynamodb.StreamViewType.NEW_AND_OLD_IMAGES,
      billingMode: dynamodb.BillingMode.PAY_PER_REQUEST,
    })

    const companyTable = new dynamodb.Table(this,'gotalentoCompanyTable', {
      tableName: 'company',
      partitionKey: { name:'companyID', type: dynamodb.AttributeType.STRING},
      stream: dynamodb.StreamViewType.NEW_AND_OLD_IMAGES,
      billingMode: dynamodb.BillingMode.PAY_PER_REQUEST,
    })

    const seekerLambda = new lambda.Function(this,'gotalentoSeekerLambda', {
      runtime: lambda.Runtime.NODEJS_14_X,
      code: lambda.Code.fromAsset('functions'),
      handler: 'index.handler',
    })

    const companyLambda = new lambda.Function(this,'gotalentoCompanyLambda', {
      runtime: lambda.Runtime.NODEJS_14_X,
      code: lambda.Code.fromAsset('functions'),
      handler: 'company.handler',
    })

    const streamLambda = new lambda.Function(this,'gotalentoStreamLambda', {
      runtime: lambda.Runtime.NODEJS_14_X,
      code: lambda.Code.fromAsset('functions'),
      handler: 'stream.handler',
    })

    streamLambda.addToRolePolicy(
        new iam.PolicyStatement({
          effect: iam.Effect.ALLOW,
          actions: [
            'ses:SendEmail',
            'ses:SendRawEmail',
            'ses:SendTemplatedEmail',
          ],
          resources: ["*"],
        }),
    );

    streamLambda.addEventSource(new lambdaEventSource.DynamoEventSource(seekerTable, {
      startingPosition: lambda.StartingPosition.LATEST,
    }));

    seekerTable.grantReadWriteData(seekerLambda)

    const goTalentoRestApi = new apiGateway.RestApi(this, 'gotalentoRestApi', {
      defaultCorsPreflightOptions: {
        allowHeaders: [
          'Content-Type',
          'X-Amz-Date',
          'Authorization',
          'X-Api-Key',
        ],
            allowMethods: ['OPTIONS', 'GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
            allowCredentials: true,
            allowOrigins: ['http://localhost:8080'],
      },
    })

    goTalentoRestApi.root
        .resourceForPath('/lead')
        .addMethod('POST',new apiGateway.LambdaIntegration(seekerLambda))

    goTalentoRestApi.root
        .resourceForPath('/company')
        .addMethod('POST',new apiGateway.LambdaIntegration(companyLambda))

    new cdk.CfnOutput(this,'Api Url', {
      value: goTalentoRestApi.url ?? 'something went wrong'
    })
  }
}

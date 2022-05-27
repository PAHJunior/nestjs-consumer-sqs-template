import { Logger, Module } from '@nestjs/common';
import { SqsModule } from '@ssut/nestjs-sqs';
import * as AWS from 'aws-sdk';

import { ConsumerController } from './consumer.controller';
import { ConsumerService } from './consumer.service';

AWS.config.update({
  region: process.env.AWS_REGION,
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});

@Module({
  imports: [
    SqsModule.register({
      consumers: [
        {
          name: 'name-queue',
          queueUrl: 'queue-url',
          sqs: new AWS.SQS(),
        },
      ],
    }),
  ],
  controllers: [ConsumerController],
  providers: [ConsumerService, Logger],
})
export class ConsumerModule {}

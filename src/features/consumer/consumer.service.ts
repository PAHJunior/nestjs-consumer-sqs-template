import { Injectable, Logger } from '@nestjs/common';
import { SqsMessageHandler } from '@ssut/nestjs-sqs';

@Injectable()
export class ConsumerService {
  public constructor(private logger: Logger) {
    this.logger.log(ConsumerService.name);
  }

  /**
   * Consumer queue.
   * @param message
   */
  @SqsMessageHandler('name-queue', false)
  public consumerQueue(message: any): any {
    this.logger.log(JSON.stringify(message, undefined, 2));
    return 'Hello world';
  }
}

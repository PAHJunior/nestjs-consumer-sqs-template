import { Controller, Get, Logger } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

import { ConsumerService } from './consumer.service';

@ApiTags('Consumer')
@Controller('consumer')
export class ConsumerController {
  public constructor(
    private readonly consumerService: ConsumerService,
    private logger: Logger,
  ) {
    this.logger.log(ConsumerController.name);
  }

  /**
   * Consumer queue.
   */
  @ApiOperation({ summary: 'Consumer queue.' })
  @Get()
  public consumerQueue(): any {
    return this.consumerService.consumerQueue({});
  }
}

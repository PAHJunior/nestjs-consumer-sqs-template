import { Module } from '@nestjs/common';
import { ConsumerModule } from './features/consumer/consumer.module';

@Module({
  imports: [ConsumerModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

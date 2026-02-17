import { Module } from '@nestjs/common';
import { BullModule } from '@nestjs/bull';
import { QueueService } from './queue.service';
import { queueConfig } from 'src/config/queue';
import { EmailProcessor } from 'src/processors/email.processor';

@Module({
  imports: [
    BullModule.registerQueue({
      name: queueConfig.name,
    }),
  ],
  providers: [QueueService, EmailProcessor],
  exports: [QueueService],
})
export class QueueModule {}

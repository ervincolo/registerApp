import { Injectable } from '@nestjs/common';
import { InjectQueue } from '@nestjs/bull';
import type { Queue } from 'bull';
import { queueConfig } from 'src/config/queue';

@Injectable()
export class QueueService {
  constructor(@InjectQueue(queueConfig.name) private queue: Queue) {}

  sendUserRegisteredConfirmation(email: string, fullName: string) {
    this.queue.add('sendUserRegisteredConfirmation', {
      email,
      fullName,
    });
  }
}

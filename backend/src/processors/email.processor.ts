import { Process, Processor } from '@nestjs/bull';
import type { Job } from 'bull';
import { queueConfig, queueEvents } from 'src/config/queue';

@Processor(queueConfig.name)
export class EmailProcessor {
  @Process(queueEvents.SEND_USER_REGISTERED_CONFIRMATION)
  async handleWelcomeEmailJob(job: Job) {
    const { email, fullName } = job.data;
    console.log(`Sending welcome E-Mail to ${fullName} at: ${email}`);
  }
}

import { Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import { events } from 'src/config/events';
import { QueueService } from 'src/modules/queue/queue.service';
import { KafkaService } from '../kafka/kafka.service';

@Injectable()
export class UserRegisteredListener {
  constructor(
    private readonly queueService: QueueService,
    private readonly kafkaService: KafkaService,
  ) {}
  @OnEvent(events.USER_REGISTERED)
  handleUserRegisteredEvent(data: any) {
    console.log('User Registered Event Received:', data);
    this.queueService.sendUserRegisteredConfirmation(data.email, data.fullName);
    this.kafkaService.kafkaRegSender(data);
  }
}

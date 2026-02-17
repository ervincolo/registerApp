import { Inject, Injectable } from '@nestjs/common';
import * as kafkajs from 'kafkajs';
import { kafkaConfig } from 'src/config/kafka';

@Injectable()
export class KafkaService {
  constructor(
  @Inject('KAFKA_SERVICE')
  private readonly kafkaService: kafkajs.Producer) {}

  async kafkaRegSender(data: { fullName: string; email: string }) {
    const message = {
      value: JSON.stringify(data),
    };
    await this.kafkaService.send({
      topic: kafkaConfig.topic, 
      messages: [{
        value: JSON.stringify(data),
      }],
    });
    console.log(`Message sent to topic ${kafkaConfig.topic}:`, message);
  }
}

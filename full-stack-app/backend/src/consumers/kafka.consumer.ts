import { Controller } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';

@Controller()
export class KafkaConsumer {
  @EventPattern('user-registration')
  kafkaConsumer(data: any): void {
    console.log('Kafka Consumer received data:', data);
  }
}

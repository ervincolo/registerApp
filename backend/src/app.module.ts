import { Module } from '@nestjs/common';
import { AppController } from './app.controller.';
import { AuthService } from './services/auth.service';
import { KafkaService } from './kafka/kafka.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { BullModule } from '@nestjs/bull';
import { QueueModule } from './modules/queue/queue.module';
import { UserRegisteredListener } from './listeners/userRegistered.listener';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { KafkaConsumer } from './consumers/kafka.consumer';
import { queueConfig } from './config/queue';
import { typeOrmConfig } from './config/typeorm';

@Module({
  imports: [
    BullModule.forRoot({
      redis: {
        host: queueConfig.host,
        port: queueConfig.port,
      },
    }),
    TypeOrmModule.forRoot(typeOrmConfig),
    TypeOrmModule.forFeature([User]),
    QueueModule,  
    EventEmitterModule.forRoot(),
    ClientsModule.register([
      {
        name: 'KAFKA_SERVICE',
        transport: Transport.KAFKA,
        options: {
          client: {
            brokers: ['localhost:9092'],
          },
        },
      },
    ]),
  ],
  controllers: [AppController, KafkaConsumer],
  providers: [AuthService, KafkaService, UserRegisteredListener],
})
export class AppModule {}

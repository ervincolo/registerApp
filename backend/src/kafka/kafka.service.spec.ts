import { Test, TestingModule } from '@nestjs/testing';
import { KafkaService } from './kafka.service';

const kafkaMock = {
  send: jest.fn(),
};

describe('KafkaService', () => {
  let service: KafkaService;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [KafkaService, {
        provide: 'KAFKA_SERVICE',
        useValue: kafkaMock, 
      }],
    }).compile();

    service = module.get<KafkaService>(KafkaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

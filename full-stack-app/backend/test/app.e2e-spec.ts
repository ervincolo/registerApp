import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import request from 'supertest';
import { App } from 'supertest/types';
import { AppModule } from './../src/app.module';

describe('Testing register endpoint!', () => {
  let app: INestApplication<App>;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('POST/ register / userRegistration', () => {
    return request(app.getHttpServer())
      .post('/register')
      .send({
        fullName: 'Ervin Colo',
        email: 'ervin@gmail.com',
        password: 'password123',
      })
      .expect(201)
      .expect('User registered successfully!');
  });
});

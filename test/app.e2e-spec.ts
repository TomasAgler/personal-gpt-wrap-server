import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { App } from 'supertest/types';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication<App>;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Hello World!');
  });
  it('/interview-prep (GET)', () => {
    return request(app.getHttpServer())
      .get('/interview-prep')
      .expect(200)
      .expect((res) => {
        expect(res.body).toBeInstanceOf(Array);
      });
  });
  it('/interview-prep (POST)', () => {
    return request(app.getHttpServer())
      .post('/interview-prep')
      .send({ jobPosition: 'Software Engineer' })
      .expect(201)
      .expect((res) => {
        expect(res.body).toHaveProperty('id');
        expect(res.body.jobPosition).toBe('Software Engineer');
      });
  });
  it('/interview-prep-question (PUT)', () => {
    return request(app.getHttpServer())
      .put('/interview-prep-question')
      .send({ id: 1, question: 'What is your favorite programming language?' })
      .expect(200)
      .expect((res) => {
        expect(res.body).toHaveProperty('id');
        expect(res.body.question).toBe(
          'What is your favorite programming language?',
        );
      });
  });
});

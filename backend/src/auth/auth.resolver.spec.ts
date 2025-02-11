import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../app.module';

describe('AuthResolver (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  it('should login and return a JWT token', async () => {
    const response = await request(app.getHttpServer())
      .post('/graphql')
      .send({
        query: `
          mutation {
            login(email: "email5@teste.com.br", password: "jalves@001")
          }
        `,
      })
      .expect(200);

    expect(response.body.data.login).toBeDefined();
  });

  it('should return an error for invalid credentials', async () => {
    const response = await request(app.getHttpServer())
      .post('/graphql')
      .send({
        query: `
          mutation {
            login(email: "invalid@teste.com.br", password: "wrongpassword")
          }
        `,
      })
      .expect(200);

    expect(response.body.errors).toBeDefined();
    expect(response.body.errors[0].message).toBe('Invalid credentials');
  });

  it('should return an error for missing email', async () => {
    const response = await request(app.getHttpServer())
      .post('/graphql')
      .send({
        query: `
          mutation {
            login(password: "jalves@001")
          }
        `,
      })
      .expect(400);

    expect(response.body.errors).toBeDefined();
    expect(response.body.errors[0].message).toContain('Field "login" argument "email" of type "String!" is required');
  });

  it('should return an error for missing password', async () => {
    const response = await request(app.getHttpServer())
      .post('/graphql')
      .send({
        query: `
          mutation {
            login(email: "email5@teste.com.br")
          }
        `,
      })
      .expect(400);

    expect(response.body.errors).toBeDefined();
    expect(response.body.errors[0].message).toContain('Field "login" argument "password" of type "String!" is required');
  });
});
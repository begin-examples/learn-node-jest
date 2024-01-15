import { app, server } from '../index';
import request from 'supertest';
import {expect, jest, test} from '@jest/globals';


beforeAll(async () => {
})

afterAll(async () => {
  server.close();
})

describe('api tests', () => {
  // test that GET request completes without error
  test('get /', async () => {
    const response = await request(app).get('/api').expect(200);
    expect(response.body.message).toBe('Hello, world!');
  });

  test('get / with key', async () => {
    const response = await request(app).get('/api?key=me').expect(200);
    expect(response.body.message).toBe('Hello, world me!');
  });


})


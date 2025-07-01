const request = require('supertest');
const fs = require('fs');
const app = require('../mock-api');

jest.mock('fs');

describe('Mock API Tests', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('GET / should return Backend API', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe('Backend API');
  });

  it('POST /user should create a new user if not exists', async () => {
    fs.readFileSync.mockReturnValue('{}');
    fs.writeFileSync.mockImplementation(() => {});

    const response = await request(app).post('/user').send({
      username: 'testuser',
      name: 'Test User',
      password: '123456',
      favouriteFruit: 'Banana',
      favouriteMovie: 'Inception',
      favouriteNumber: '7'
    });

    expect(response.statusCode).toBe(200);
    expect(response.text).toBe('Account Created');
  });

  it('POST /user should not overwrite existing user', async () => {
    const existingUsers = {
      testuser: {
        name: 'Test User',
        password: '123456',
        favouriteFruit: 'Banana',
        favouriteMovie: 'Inception',
        favouriteNumber: '7'
      }
    };

    fs.readFileSync.mockReturnValue(JSON.stringify(existingUsers));
    fs.writeFileSync.mockImplementation(() => {});

    const response = await request(app).post('/user').send({
      username: 'testuser',
      name: 'Test User',
      password: '123456',
      favouriteFruit: 'Apple',
      favouriteMovie: 'Matrix',
      favouriteNumber: '5'
    });

    expect(response.statusCode).toBe(200);
    expect(response.text).toBe('Account Already Exists');
  });
});

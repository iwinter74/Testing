const fetch = require('node-fetch');

let server;
beforeAll(() => {
  // eslint-disable-next-line global-require
  server = require('./app');
});

afterAll(() => {
  server.close();
});

describe('Test API English', () => {
  it('Should return a status of 200 when a request is made to POST /calculate', async () => {
    const body = {
      lang: 'en',
      input: 'one plus one',
    };
    const response = await fetch('http://localhost:3000/calculate', {
      method: 'POST',
      body: JSON.stringify(body),
      headers: { 'Content-Type': 'application/json' },
    });
    expect(response.status).toBe(200);
  });

  it('Should return a object with a result', async () => {
    const body = {
      lang: 'en',
      input: 'one plus one',
    };
    const response = await fetch('http://localhost:3000/calculate', {
      method: 'POST',
      body: JSON.stringify(body),
      headers: { 'Content-Type': 'application/json' },
    });
    const responseBody = await response.json();
    expect(responseBody.result).toBeDefined();
  });
});

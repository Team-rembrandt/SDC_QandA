const app = require('./index.js').app;
const request = require('supertest');

describe('GET /questions', () => {

  it('Responsed with JSON object with status code 200', () => {
    request(app)
      .get('/qa/questions')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
  });

  it('Responds with a non empty result', () => {
    request(app)
      .get('/qa/questions')
      .expect((res) => {
        (res.body.length).should.equal(1);
      })
  });

  it('Response should contain product_id and results key', () => {
    request(app)
      .get('/qa/questions')
      .expect((res) => {
        expect(res.body[0].product_id).not.toBeNull();
        expect(res.body[0].results).not.toBeNull();
      });
  });

});

describe('GET /questions/:question_id/answers', () => {

  it('Responds with JSON object and status code 200', () => {
    request(app)
      .get('/qa/questions/3/answers')
      .expect('Content-Type', /json/)
      .expect(200)
  });

  it('Responds with a non empty result', () => {
    request(app)
      .get('/qa/questions/5/answers')
      .expect((res) => {
        expect(res.body.length).toBeGreaterThan(0);
      })
  });

  it('Response should contain question, page, count, results key', () => {
    request(app)
      .get('/qa/questions/4/answers')
      .expect((res) => {
        expect(res.body[question]).not.toBeNull();
        expect(res.body[page]).not.toBeNull();
        expect(res.body[count]).not.toBeNull();
        expect(res.body[results]).not.toBeNull();
      });
  });

});

describe('POST /questions', () => {

  it('Responds with status code 201', () => {
    request(app)
      .post('/qa//questions')
      .expect(201)
  });

});

describe('POST /questions/:question_id/answers', () => {

  it('Responds with status code 201', () => {
    request(app)
      .post('/qa/questions/3/answers')
      .expect(201)
  });

});

describe('PUT /questions/:question_id/helpful', () => {

  it('Responds with status code 204', () => {
    request(app)
      .put('/qa/questions/3/helpful')
      .expect(204)
  });

});

describe('PUT /questions/:question_id/report', () => {

  it('Responds with status code 204', () => {
    request(app)
      .put('/qa/questions/3/report')
      .expect(204)
  });

});

describe('PUT /answers/:answer_id/helpful', () => {

  it('Responds with status code 204', () => {
    request(app)
      .put('/qa/answer/3/helpful')
      .expect(204)
  });

});

describe('PUT /answers/:answer_id/report', () => {

  it('Responds with status code 204', () => {
    request(app)
      .put('/qa/answer/3/report')
      .expect(204)
  });

});
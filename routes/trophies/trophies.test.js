const app = require('../../app');
const supertest = require('supertest');
const request = supertest(app);
const { initialUsers } = require('../../db/scripts/seedData/index');
//const assert = require('assert'); // not sure what this is used for?

const someTrophyObject = expect.objectContaining({
  id: expect.any(Number),
  user_id: 3,
  name: expect.any(String),
  path: expect.any(String),
  color: expect.any(String),
  awarded: expect.any(Boolean),
});

const someArrayOfTrophyObjects = expect.arrayContaining([someTrophyObject]);

// TEST TROPHIES USER BY ID

describe('GET /trophies/3', () => {
  it('should return a User object', async (done) => {
    const response = await request.get(`/trophies/3`);
    //console.log('response.body.payload is:', response.body.payload);
    //console.log(response.body.payload);
    expect(response.body.payload[0]).toEqual(someTrophyObject);
    expect(response.status).toBe(200);
    done();
  });
});

// TEST CREATING NEW TROPHYTABLE

describe('POST /users', () => {
  it('should create new trophytable for new user', async (done) => {
    const newUser = {
      name: 'Jeremy',
      email: 'jeremy@jeremy.com',
      password: 'password',
      personality: 'INFP',
      start_date: '2020-09-20',
      points: 0,
    };
    const response = await request.post('/users').send(newUser);

    console.log(response.body.message.substring(46));

    expect(response.body.message.substring(46)).toBe(
      `["Github","HTML","VSCode","JavaScript","CSS","Trello","SQL","Postman","Jest","React","Docker","AWS"]`
    );
    expect(response.status).toBe(200);
    done();
  });
});

// TEST UPDATING A TROPHY

describe('PATCH /trophies/:trophyId', () => {
  it('should check that patch is updating specific trophy', async (done) => {
    const trophyId = 3;
    const updatedTrophyTrue = {
      awarded: true,
    };

    const trueResponse = await request
      .patch(`/trophies/${trophyId}`)
      .send(updatedTrophyTrue);
    console.log(
      '🚀 ~ file: trophies.test.js ~ line 70 ~ it ~ trueResponse',
      trueResponse.body.payload
    );

    expect(trueResponse.body.payload[0]).toMatchObject({
      id: expect.any(Number),
      user_id: expect.any(Number),
      name: expect.any(String),
      path: expect.any(String),
      color: expect.any(String),
      awarded: true,
    });

    expect(trueResponse.status).toBe(200);

    done();
  });
});

describe('PATCH /trophies/:trophyId', () => {
  it('should check that patch is updating specific trophy', async (done) => {
    const trophyId = 3;
    const updatedTrophyFalse = {
      awarded: false,
    };
    const falseResponse = await request
      .patch(`/trophies/${trophyId}`)
      .send(updatedTrophyFalse);
    console.log(
      '🚀 ~ file: trophies.test.js ~ line 75 ~ it ~ falseResponse',
      falseResponse.body.payload
    );

    expect(falseResponse.body.payload[0]).toMatchObject({
      id: expect.any(Number),
      user_id: expect.any(Number),
      name: expect.any(String),
      path: expect.any(String),
      color: expect.any(String),
      awarded: false,
    });
    expect(falseResponse.status).toBe(200);
    done();
  });
});

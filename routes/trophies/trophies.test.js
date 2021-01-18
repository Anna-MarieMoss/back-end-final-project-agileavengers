const app = require('../../app');
const supertest = require('supertest');
const request = supertest(app);
const { initialUsers } = require('../../db/scripts/seedData/index');
//const assert = require('assert'); // not sure what this is used for?

let someTrophyObject = expect.objectContaining({
  id: expect.any(Number),
  user_id: 3,
  name: expect.any(String),
  path: expect.any(String),
  color: expect.any(String),
  awarded: expect.any(Boolean),
});

let someArrayOfTrophyObjects = expect.arrayContaining([someTrophyObject]);

// TEST TROPHIES USER BY ID

describe('GET /trophies/3', () => {
  it('should return a User object', async (done) => {
    let response = await request.get(`/trophies/3`);
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
    let newUser = {
      name: 'Jeremy',
      email: 'jeremy@jeremy.com',
      password: 'password',
      personality: 'INFP',
      start_date: '2020-09-20',
      points: 0,
    };
    let response = await request.post('/users').send(newUser);

    console.log(response.body.message);

    expect(response.body.message).toContain(
      `["Github","HTML","VSCode","JavaScript","CSS","Trello","SQL","Postman","Jest","React","Docker","AWS","1 Day Streak","10 Day Streak","30 Day Streak"]`
    );
    expect(response.status).toBe(200);
    done();
  });
});

// TEST UPDATING A TROPHY

describe('PATCH /trophies/:trophyId', () => {
  it('should check that patch is updating specific trophy by Id', async (done) => {
    let trophyId = 25;

    let patchResponseOne = await request.patch(`/trophies/${trophyId}`);
    let patchResponseTwo = await request.patch(`/trophies/${trophyId}`);

    console.log(
      '🚀 ~ file: trophies.test.js ~ line 70 ~ it ~ Patches',
      patchResponseOne.body.payload,
      patchResponseTwo.body.payload
    );

    expect(patchResponseOne.body.payload[0].awarded).toBe(
      !patchResponseTwo.body.payload[0].awarded
    );

    expect(patchResponseOne.status).toBe(200);
    expect(patchResponseTwo.status).toBe(200);

    done();
  });
});

describe('PATCH /trophies/:userId/:name', () => {
  it('should check that patch is updating specific trophy by userId and name', async (done) => {
    let userId = 3;
    let name = 'HTML';
    let trophyId = 26;

    let getResponse = await request.get(`/trophies/${trophyId}`);

    if (getResponse.body.payload[0].awarded === true) {
      await request.patch(`/trophies/${getResponse.body.payload[0].id}`);
    }

    let patchResponse = await request.patch(`/trophies/${userId}/${name}`);

    console.log(
      '🚀 ~ file: trophies.test.js ~ line 70 ~ it ~ trueResponse',
      patchResponse.body.payload
    );

    expect(patchResponse.body.payload[0].awarded).toBe(true);

    expect(getResponse.status).toBe(200);
    expect(patchResponse.status).toBe(200);

    done();
  });
});

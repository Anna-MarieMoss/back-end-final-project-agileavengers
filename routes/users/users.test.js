const app = require('../../app');
const supertest = require('supertest');
const request = supertest(app);
const { initialUsers } = require('../../db/scripts/seedData/index');
//const assert = require('assert'); // not sure what this is used for?

const someUserObject = expect.objectContaining({
  id: expect.any(Number),
  name: expect.any(String),
  email: expect.any(String),
  // password: expect.any(String),
  // personality: null,
  // start_date: null,
  // points: expect.anything(),
});

const someArrayOfUserObjects = expect.arrayContaining([someUserObject]);

// TEST GET ALL USERS

describe('GET /users', () => {
  it('should return all Users', async (done) => {
    const response = await request.get('/users');

    //console.log(response.body.payload[0] + 'equals' + someUserObject);
    expect(response.body.payload).toStrictEqual(someArrayOfUserObjects);
    expect(response.status).toBe(200);
    done();
  });
});

// TEST GET USER BY ID

describe('GET /users/:email', () => {
  it('should return a User object', async (done) => {
    const response = await request.get(`/users/${initialUsers[0].email}`);
    //console.log('response.body.payload is:', response.body.payload);
    expect(response.body.payload[0]).toEqual(someUserObject);
    expect(response.status).toBe(200);
    done();
  });
});

// TEST CREATING NEW USER

describe('POST /users', () => {
  it('should return the newly created user object', async (done) => {
    const newUser = {
      name: 'Jeremy',
      email: 'jeremy@jeremy.com',
      password: 'password',
      personality: 'INFP',
      start_date: '2020-09-20',
      points: 0,
    };
    const response = await request.post('/users').send(newUser);

    //console.log(response.body.payload[0]);

    expect(response.body.payload[0]).toMatchObject({
      name: newUser.name,
      email: newUser.email,
      password: newUser.password,
      personality: newUser.personality,
      start_date: '2020-09-20',
      points: newUser.points,
    });
    expect(response.status).toBe(200);
    done();
  });
});

// TEST UPDATING A USER

describe('PATCH /users/:userId', () => {
  it('should check that patch is updating specific user info', async (done) => {
    const userId = 3;
    const updatedUser = {
      name: 'Jeremy',
      email: 'jeremylaw2308@gmail.com',
      password: '',
    };

    const response = await request.patch(`/users/${userId}`).send(updatedUser);

    expect(response.body.payload[0]).toMatchObject({
      id: userId,
      name: updatedUser.name,
      email: updatedUser.email,
      password: updatedUser.password,
      personality: expect.any(String),
      start_date: expect.any(String),
      points: expect.any(Number),
    });
    expect(response.status).toBe(200);
    done();
  });
});

// TEST DELETING A USER

describe('DELETE /users/:userId', () => {
  it('should delete user by id', async (done) => {
    const newUserToBeDeleted = {
      name: 'Alice',
      email: 'alice@alice.com',
      password: 'password',
      personality: 'INFP',
      start_date: '2020-09-20',
      points: 0,
    };

    const postResponse = await request.post('/users').send(newUserToBeDeleted);
    const userIdToBeDeleted = postResponse.body.payload[0].id;
    //console.log(userIdToBeDeleted);
    await request.delete(`/users/${userIdToBeDeleted}`);
    const getResponse = await request.get(`/users/${userIdToBeDeleted}`);

    expect(getResponse.body.payload.length).toBe(0);
    expect(postResponse.status).toBe(200);
    expect(getResponse.status).toBe(200);
    done();
  });
});

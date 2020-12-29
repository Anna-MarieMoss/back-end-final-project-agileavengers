const app = require('../../app');
const supertest = require('supertest');
const request = supertest(app);
//const assert = require("assert"); // not sure what this is used for?

const someUserObject = expect.objectContaining({
  id: expect.any(Number),
  name: expect.any(String),
  email: expect.any(String),
  password: expect.any(String),
  personality: expect.any(String),
  start_date: expect.any(String),
  points: expect.any(Number),
});

describe('GET /:UserId', () => {
  it('should return a User object', async () => {
    const response = await request.get('/users/1');
    expect(response.body.payload[0]).toEqual(someUserObject);
    expect(response.status).toBe(200);
  });
});

describe('POST /users', () => {
  it('should return the newly created user object', async (done) => {
    const newUser = {
      name: 'Alice',
      email: 'alice@alice.com',
      password: 'password',
      personality: 'INFP',
      start_date: '2020-09-20',
      points: 0,
    };
    const response = await request.post('/users').send(newUser);
    expect(response.body.payload[0]).toMatchObject({
      name: newUser.name,
      email: newUser.email,
      password: newUser.password,
      personality: newUser.personality,
      start_date: '2020-09-19T23:00:00.000Z',
      points: newUser.points,
    });
    expect(response.status).toBe(200);
    done();
  });
});

// describe("PATCH /sessions/:id", () => {
//   it("should", async (done) => {
//     const sessionId = 1;
//     const updatedSession = {
//       notes: [
//         "Would be good if we could discuss promises at the next session. Doing them in workshops at the moment and I don't really understand them well yet.",
//         "We can discuss a few examples, no problem.",
//       ],
//       menteeFeedback: 3,
//       mentorFeedback: 5,
//     };

//     const response = await request
//       .patch(`/sessions/${sessionId}`)
//       .send(updatedSession);

//     expect(response.body.payload).toMatchObject({
//       id: sessionId,
//       notes: updatedSession.notes,
//       mentee_feedback: updatedSession.menteeFeedback,
//       mentor_feedback: updatedSession.mentorFeedback,
//     });
//     expect(response.status).toBe(200);
//     done();
//   });
// });

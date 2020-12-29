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
  start_date: expect.any(Date),
  points: expect.any(Number),
});

describe('GET /:UserId', () => {
  it('should return a User object', async () => {
    console.log('hi');
    try {
      const response = await request.get('/users/1');
      //expect(response.body.payload).toStrictEqual(someUserObject);
      //expect(response.status).toBe(200);
      console.log(response);
    } catch (err) {
      console.log(err);
    }
    //expect("Content-Type", /json/);
  });
});

// describe("POST /sessions", () => {
//   it("should return the newly created session object", async (done) => {
//     const newSession = {
//       notes: ["note 1", "note 2"],
//       timestamp: new Date().toISOString(),
//       mentor_feedback: null,
//       mentee_feedback: null,
//       mentorId: 1,
//       menteeId: 2,
//     };
//     const response = await request.post("/sessions").send(newSession);
//     expect(response.body.payload).toMatchObject({
//       notes: newSession.notes,
//       timestamp: newSession.timestamp,
//       mentor_feedback: newSession.mentor_feedback,
//       mentee_feedback: newSession.mentee_feedback,
//       mentor_id: newSession.mentorId,
//       mentee_id: newSession.menteeId,
//     });
//     expect(response.status).toBe(200);
//     done();
//   });
// });

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

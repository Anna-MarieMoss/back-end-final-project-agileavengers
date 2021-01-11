const app = require('../../app');
const supertest = require('supertest');
const request = supertest(app);
//const assert = require('assert'); // not sure what this is used for?

const someMoodObject = expect.objectContaining({
  id: expect.any(Number),
  user_id: expect.any(Number),
  mood: expect.any(Number),
  date: expect.any(String),
});

const someArrayOfMoodObjects = expect.arrayContaining([someMoodObject]);

// TEST GET ALL MOODS

describe('GET /moods', () => {
  it('should return all Moods', async (done) => {
    const response = await request.get('/moods');
    expect(response.body.payload).toStrictEqual(someArrayOfMoodObjects);
    expect(response.status).toBe(200);
    done();
  });
});

// TEST GET MOOD BY ID

describe('GET /moods/:moodId', () => {
  it('should return all moods for a certain user', async (done) => {
    const response = await request.get('/moods/1');
    expect(response.body.payload[0]).toEqual(someMoodObject);
    expect(response.status).toBe(200);
    done();
  });
});

// TEST CREATING NEW Mood
// NEEDS SOME WORK

describe('POST /moods', () => {
  it('should return the newly created Mood object', async (done) => {
    const newMood = {
      user_id: 1,
      mood: 5,
    };
    const getAllMoodsResponse = await request.get('/moods');
    const numOfMoods = getAllMoodsResponse.body.payload.length;

    const MoodResponse = await request.post('/moods').send(newMood);

    const newGetAllMoodsResponse = await request.get('/moods');
    const newNumOfMoods = newGetAllMoodsResponse.body.payload.length;

    expect(newNumOfMoods).toBe(numOfMoods + 1);
    expect(getAllMoodsResponse.status).toBe(200);
    expect(MoodResponse.status).toBe(200);
    expect(newGetAllMoodsResponse.status).toBe(200);
    done();
  });
});

// TEST DELETING A Mood

describe('DELETE /moods/:moodId', () => {
  it('should delete Mood by id', async (done) => {
    const newMoodToBeDeleted = {
      user_id: 1,
      mood: 5,
    };

    const MoodResponse = await request.post('/moods').send(newMoodToBeDeleted);
    const moodIdToBeDeleted = MoodResponse.body.payload[0].id;
    await request.delete(`/moods/${moodIdToBeDeleted}`);
    const getResponse = await request.get(`/moods/${moodIdToBeDeleted}`);

    expect(getResponse.body.payload.length).toBe(0);
    expect(MoodResponse.status).toBe(200);
    expect(getResponse.status).toBe(200);
    done();
  });
});

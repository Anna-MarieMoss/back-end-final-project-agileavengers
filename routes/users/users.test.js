const app = require("../../app");
const supertest = require("supertest");
const request = supertest(app);
//const assert = require("assert"); // not sure what this is used for?

const someUserObject = expect.objectContaining({
  id: 1,
  name: expect.any(String),
  email: expect.any(String),
  password: expect.any(String),
  personality: expect.any(String),
  start_date: expect.any(String),
  points: expect.any(Number),
});

// TEST GET USER BY ID

describe("GET /:UserId", () => {
  it("should return a User object", async (done) => {
    const response = await request.get("/users/1");
    console.log(response.body.payload[0] + "equals" + someUserObject);
    expect(response.body.payload[0]).toEqual(someUserObject);
    expect(response.status).toBe(200);
    done();
  });
});

// TEST CREATING NEW USER

describe("POST /users", () => {
  it("should return the newly created user object", async (done) => {
    const newUser = {
      name: "Alice",
      email: "alice@alice.com",
      password: "password",
      personality: "INFP",
      start_date: "2020-09-20",
      points: 0,
    };
    const response = await request.post("/users").send(newUser);
    expect(response.body.payload[0]).toMatchObject({
      name: newUser.name,
      email: newUser.email,
      password: newUser.password,
      personality: newUser.personality,
      start_date: "2020-09-19T23:00:00.000Z",
      points: newUser.points,
    });
    expect(response.status).toBe(200);
    done();
  });
});

// TEST UPDATING USER PROFILE

describe("PATCH /users/:userId", () => {
  it("should check that patch is updating specific user info", async (done) => {
    const userId = 1;
    const updatedUser = {
      name: "Alice",
      email: "alice@alice.com",
      password: "password",
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

describe("DELETE /users/:userId", () => {
  it("should delete user by id", async (done) => {
    const userId = 1;
    const response = await request.delete(`/users/${userId}`).send(updatedUser);
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

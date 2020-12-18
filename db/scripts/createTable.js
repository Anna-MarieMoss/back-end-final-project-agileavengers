const { query } = require('../index.js');

async function createUsersTable() {
  let res = await query(`CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name TEXT,
    email TEXT,
    password TEXT,
    personality TEXT,
    start_date TIMESTAMP,
    points INTEGER
)`);
  console.log(res);
}

async function createPostsTable() {
  let res = await query(`CREATE TABLE posts (
      id SERIAL PRIMARY KEY,
      user_id FOREIGN KEY,
      post TEXT,
      multimedia TEXT,
      date TIMESTAMP,
      favorite BOOLEAN
  )`);
  console.log(res);
}

async function createMoodsTable() {
  let res = await query(`CREATE TABLE moods (
      id SERIAL PRIMARY KEY,
      user_id FOREIGN KEY,
      mood INTEGER,
      date TIMESTAMP
  )`);
  console.log(res);
}

async function createTrophiesTable() {
  let res = await query(`CREATE TABLE trophies (
      id SERIAL PRIMARY KEY,
      user_id FOREIGN KEY,
      trophy_name TEXT,
      awarded BOOLEAN
  )`);
  console.log(res);
}

async function createQuotesTable() {
  let res = await query(`CREATE TABLE quotes (
      id SERIAL PRIMARY KEY,
      user_id FOREIGN KEY,
      quote TEXT,
      awarded BOOLEAN
  )`);
  console.log(res);
}

async function createNotificationsTable() {
  let res = await query(`CREATE TABLE notifications (
      id SERIAL PRIMARY KEY,
      user_id FOREIGN KEY,
      notification TEXT,
  )`);
  console.log(res);
}

const createAllTables = async () => {
  await createUsersTable();
  await createPostsTable();
  await createMoodsTable();
  await createTrophiesTable();
  await createQuotesTable();
  await createNotificationsTable();
  console.log('Tables should be created now.');
};

module.exports = { createAllTables };

// The code inside if block shouldn't run if we're requiring this file somewhere.
if (require.main === module) {
  createAllTables();
}

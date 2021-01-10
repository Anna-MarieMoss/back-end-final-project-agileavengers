const { query } = require('../index');

async function dropUsersTable() {
  return await query('DROP TABLE IF EXISTS users;');
}

async function dropPostsTable() {
  return await query('DROP TABLE IF EXISTS posts;');
}

async function dropMoodsTable() {
  return await query('DROP TABLE IF EXISTS moods;');
}

async function dropTrophiesTable() {
  return await query('DROP TABLE IF EXISTS trophies;');
}

async function dropQuotesTable() {
  return await query('DROP TABLE IF EXISTS quotes;');
}

async function dropNotificationsTable() {
  return await query('DROP TABLE IF EXISTS notifications;');
}

async function dropAllTables() {
  await dropPostsTable();
  await dropMoodsTable();
  await dropTrophiesTable();
  await dropQuotesTable();
  await dropNotificationsTable();
  await dropUsersTable(); // drop this last as the others refer to it?
  console.log('Tables should be deleted now.');
}

module.exports = { dropAllTables };

if (require.main === module) {
  dropAllTables();
}

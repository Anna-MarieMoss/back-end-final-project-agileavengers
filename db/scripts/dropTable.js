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

const dropAllTables = async () => {
  await dropSessionTable(); // Drop this one first because it refers to the other table.
  await dropPersonTable();
  console.log('Tables should be deleted now.');
};

const dropAllTables = async () => {
  await dropUsersTable();
  await dropPostsTable();
  await dropMoodsTable();
  await dropTrophiesTable();
  await dropQuotesTable();
  await dropNotificationsTable();
  console.log('Tables should be deleted now.');
};

module.exports = { dropAllTables };

if (require.main === module) {
  dropAllTables();
}

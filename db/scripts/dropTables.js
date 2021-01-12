const { query } = require('../index');

async function dropUsersTable() {
  return await query('DROP TABLE IF EXISTS users cascade;');
}

async function dropPostsTable() {
  return await query('DROP TABLE IF EXISTS posts;');
}

async function dropTrophiesTable() {
  return await query('DROP TABLE IF EXISTS trophies;');
}

async function dropAllTables() {
  await dropPostsTable();
  await dropTrophiesTable();
  await dropUsersTable(); // drop this last as the others refer to it?
  console.log('Tables should be deleted now.');
}

module.exports = { dropAllTables };

if (require.main === module) {
  dropAllTables();
}

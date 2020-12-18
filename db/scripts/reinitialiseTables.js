const { createAllTables } = require('./createTables');
const { dropAllTables } = require('./dropTables');
const { populateAllTables } = require('./populateTables');

async function reinitialiseAllTables() {
  await dropAllTables();
  await createAllTables();
  await populateAllTables();
  console.log('Tables should be reinitialised now.');
}

if (require.main === module) {
  reinitialiseAllTables();
}

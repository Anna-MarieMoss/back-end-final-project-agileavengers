const { query } = require('../index');

const {
  initialUser,
  initialPost,
  initialMood,
  initialTrophy,
  initialQuote,
  initialNotification,
} = require('./seedData');

async function populateUsersTable() {
  await query(
    `INSERT INTO users(
        id,
        name,
        email,
        password,
        personality,
        start_date,
        points
      ) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *;`,
    [
      initialUser.id,
      initialUser.name,
      initialUser.email,
      initialUser.password,
      initialUser.personality,
      initialUser.start_date,
      initialUser.points,
    ]
  );
}

async function populatePostsTable() {
  await query(
    `INSERT INTO posts(
          id,
          user_id,
          post,
          multimedia,
          date,
          favorite
        ) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *;`,
    [
      initialPost.id,
      initialPost.user_id,
      initialPost.post,
      initialPost.multimedia,
      initialPost.date,
      initialPost.favorite,
    ]
  );
}

async function populateMoodsTable() {
  await query(
    `INSERT INTO moods(
          id,
          user_id,
          mood,
          date
        ) VALUES ($1, $2, $3, $4) RETURNING *;`,
    [initialMood.id, initialMood.user_id, initialMood.mood, initialMood.date]
  );
}

async function populateTrophiesTable() {
  await query(
    `INSERT INTO trophies(
          id,
          user_id,
          trophy_name,
          awarded,
        ) VALUES ($1, $2, $3, $4) RETURNING *;`,
    [
      initialTrophy.id,
      initialTrophy.user_id,
      initialTrophy.trophy_name,
      initialTrophy.awarded,
    ]
  );
}

async function populateQuotesTable() {
  await query(
    `INSERT INTO quote(
          id,
          user_id,
          quote
        ) VALUES ($1, $2, $3) RETURNING *;`,
    [initialQuote.id, initialQuote.user_id, initialQuote.quote]
  );
}

async function populateNotificationsTable() {
  await query(
    `INSERT INTO notifications(
          id,
          user_id,
          notification
        ) VALUES ($1, $2, $3) RETURNING *;`,
    [
      initialNotification.id,
      initialNotification.user_id,
      initialNotification.notification,
    ]
  );
}

async function populateAllTables() {
  await populateUsersTable();
  await populatePostsTable();
  await populateMoodsTable();
  await populateTrophiesTable();
  await populateQuotesTable();
  await populateNotificationsTable();
  console.log('Tables should be populated now.');
}

module.exports = { populateAllTables };

if (require.main === module) {
  populateAllTables();
}

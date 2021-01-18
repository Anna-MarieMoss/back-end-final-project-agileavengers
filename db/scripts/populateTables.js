const { query } = require('../index');
const trophyTable = require('./trophyTableData');

const {
  initialUsers,
  initialPosts,
  initialMoods,
  initialTrophies,
  initialQuote,
  initialNotification,
} = require('./seedData');

async function populateUsersTable() {
  for (let user of initialUsers) {
    await query(
      `INSERT INTO users(
        name,
        email,
        password,
        personality,
        start_date,
        points
      ) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *;`,
      [
        user.name,
        user.email,
        user.password,
        user.personality,
        user.startDate,
        user.points,
      ]
    );
  }
}

async function populatePostsTable() {
  for (let i = 1; i < initialUsers.length + 1; i++) {
    for (const post of initialPosts) {
      await query(
        `INSERT INTO posts(
          user_id,
          mood,
          text,
          image,
          video,
          audio,
          date,
          favorite
        ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *;`,
        [
          i,
          post.mood || Math.floor(Math.random() * 5) + 1,
          post.text,
          post.image,
          post.video,
          post.audio,
          new Date(post.date).toDateString(),
          post.favorite,
        ]
      );
    }
  }
}

// userId currently hard coded

async function populateTrophiesTable() {
  for (let i = 1; i < initialUsers.length + 1; i++) {
    for (const trophy of trophyTable.trophyTable) {
      const response = await query(
        `INSERT INTO
     trophies(user_id, name, path, color, awarded)
     VALUES ($1, $2, $3, $4, $5)
     RETURNING *;`,
        [i, trophy.name, trophy.path, trophy.color, trophy.awarded]
      );
    }
  }
}

async function populateAllTables() {
  // await populateUsersTable();
  // await populatePostsTable();
  await populateTrophiesTable();
  console.log('Tables should be populated now.');
}

module.exports = { populateAllTables };

if (require.main === module) {
  populateAllTables();
}

const { query } = require('../db/index');

async function getAllMoods() {
  const response = await query(
    `SELECT * FROM moods
        ORDER BY date;`
  );
  return response.rows;
}

async function getMoodById(userId) {
  const response = await query(
    `SELECT * FROM moods
        WHERE user_id = $1
        ORDER BY date;`,
    [userId]
  );
  return response.rows;
}

async function createMood(newMood) {
  const response = await query(
    `INSERT INTO
        moods(user_id, mood, date)
        VALUES ($1,$2,$3)
        RETURNING id;`,
    [newMood.userId, newMood.mood, new Date().toDateString()]
  );
  return response.rows;
}

module.exports = {
  getAllMoods,
  getMoodById,
  createMood,
};

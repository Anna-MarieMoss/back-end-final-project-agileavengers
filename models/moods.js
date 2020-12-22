const { query } = require('../db/index');

/* GET ALL MOODS FOR ALL USERS*/

async function getAllMoods() {
    const response = await query(
      `SELECT * FROM moods
        ORDER BY date;`
    );
    return response.rows;
  }

  /* GET ALL MOODS FOR ONE USER*/

  async function getMoodById(userId) {
    const response = await query(
      `SELECT * FROM moods
        WHERE user_id = $1
        ORDER BY date;`,
      [userId]
    );
    return response.rows;
  }

/* POST MOOD FOR A USER */

async function createMood(newMood) {
    const response = await query(
      `INSERT INTO
        moods(user_id, mood, date)
        VALUES ($1,$2,$3)
        RETURNING id;`,
      [newMood.userId, newMood.mood, newMood.date]
    );
    return response.rows;
    }

module.exports = {
    getAllMoods,
    getMoodById,
    createMood,
};
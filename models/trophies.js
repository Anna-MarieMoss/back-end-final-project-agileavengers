const { query } = require('../db/index');

async function getTrophiesById(userId) {
    const response = await query(
        `SELECT * FROM trophies
          WHERE user_id = $1
          ORDER BY id;`,
        [userId]
      );
      return response.rows;
}

async function getAwardedTrophiesById(userId) {
  const response = await query(
      `SELECT * FROM trophies
        WHERE user_id = $1 AND awarded = true
        ORDER BY id;`,
      [userId]
    );
    return response.rows;
}

module.exports = {
  getTrophiesById,
  getAwardedTrophiesById
};
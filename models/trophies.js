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


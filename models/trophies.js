const { query } = require('../db/index');


// GET all awarded trophies
async function getTrophiesIfReceived() {
  const response = await query(
    `SELECT * FROM trophies
      WHERE awarded = true
      ORDER BY id;`
  );
  return response.rows;
}

//GET all trophies (awarded and not awarded) for a user

async function getTrophiesById(userId) {
    const response = await query(
        `SELECT * FROM trophies
          WHERE user_id = $1
          ORDER BY id;`,
        [userId]
      );
      return response.rows;
}

//POST a new trophy

async function createTrophy(newTrophy) {
  const response = await query(
    `INSERT INTO
        trophies(user_id, trophy_name, awarded)
        VALUES ($1,$2,$3)
        RETURNING id;`,
    [newTrophy.user_id, newTrophy.trophy_name, newTrophy.awarded]
  );
  return response.rows;
}

module.exports = {
  getTrophiesById,
  getTrophiesIfReceived,
  createTrophy
};



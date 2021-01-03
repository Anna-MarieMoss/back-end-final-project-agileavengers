const { query } = require('../db/index');

//GET all trophies for a user (whether awarded or not)

async function getTrophiesById(userId) {
    const response = await query(
        `SELECT * FROM trophies
          WHERE user_id = $1
          ORDER BY id;`,
        [userId]
      );
  return response;
}

//GET all trophies awarded for a user

async function getAwardedTrophiesById(userId) {
  const response = await query(
      `SELECT * FROM trophies
        WHERE user_id = $1 AND awarded = true
        ORDER BY id;`,
      [userId]
    );
  return response
}
//POST a new trophy

async function createTrophy(newTrophy) {
  const response = await query(
    `INSERT INTO 
      trophies(user_id, trophy_name, awarded)
      VALUES ($1, $2, $3)
      RETURNING id;`,
    [
      newTrophy.user_id,
      newTrophy.trophy_name,
      newTrophy.awarded
    ]
  );
  return response.rows;
}

module.exports = {
  getTrophiesById,
  getAwardedTrophiesById,
  createTrophy
};

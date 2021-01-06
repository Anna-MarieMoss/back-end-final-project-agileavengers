const { query } = require('../db/index');

//GET all trophies for a user (whether awarded or not)

async function getTrophiesById(userId) {
    const response = await query(
        `SELECT * FROM trophies
          WHERE user_id = $1
          ORDER BY id;`,
        [userId]
      );
  return response.rows;
}

//GET all trophies awarded for a user

async function getAwardedTrophiesById(userId) {
  const response = await query(
      `SELECT * FROM trophies
        WHERE user_id = $1 AND awarded = true
        ORDER BY id;`,
      [userId]
    );
  return response.rows;
}

//POST all trophies as false for new user
async function createTrophyTable(trophyTable, userId){
  const response = await query(
    `INSERT INTO
     trophies(user_id, trophy_name, trophy_img, awarded)
     VALUES ($1, $2, $3)
     RETURNING id;`,
    [
      userId,
      trophyTable.trophyName,
      trophyTable.trophyImg,
      trophyTable.awarded
    ]
  );
  return response.rows;
}

//POST a new trophy
async function createTrophy(newTrophy) {
  const response = await query(
    `INSERT INTO 
      trophies(user_id, trophy_name, trophy_img, awarded)
      VALUES ($1, $2, $3)
      RETURNING id;`,
    [
      newTrophy.userId,
      newTrophy.trophyName,
      newTrophy.trophyImg,
      newTrophy.awarded
    ]
  );
  return response.rows;
}

/* EDIT AN EXISTING TROPHY FOR A USER */

async function updateTrophyByTrophyId(trophyId) {
  const response = await query(
    `UPDATE trophies 
     SET awarded = NOT awarded 
     WHERE id = $1
     RETURNING *;`,
    [trophyId]
  );
  return response.rows;
}

module.exports = {
  getTrophiesById,
  getAwardedTrophiesById,
  createTrophyTable,
  createTrophy,
  updateTrophyByTrophyId
};

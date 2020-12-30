const { query } = require("../db/index");

/* GET ALL USERS */

async function getAllUsers() {
  const response = await query(
    `SELECT * FROM users
        ORDER BY id;`
  );
  return response.rows;
}

/* GET USER BY ID */

async function getUserById(userId) {
  const response = await query(
    `SELECT * FROM users
        WHERE id = $1
        ORDER BY id;`,
    [userId]
  );
  return response.rows;
}

/* CREATE A NEW USER */

async function createUser(newUser) {
  const response = await query(
    `INSERT INTO users(
        name,
        email,
        password,
        personality,
        start_date,
        points
      ) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *;`,
    [
      newUser.name,
      newUser.email,
      newUser.password,
      newUser.personality,
      newUser.start_date,
      newUser.points,
    ]
  );
  return response.rows;
}

/* UPDATE USER BY ID*/

async function updateUserByUserId(userId, updatedUser) {
  const response = await query(
    `UPDATE users SET (
      name,
      email,
      password,
      personality,
      start_date,
      points
    ) = (
      COALESCE($1, name),
      COALESCE($2, email),
      COALESCE($3, password),
      COALESCE($4, personality),
      COALESCE($5, start_date),
      COALESCE($6, points)
      )
    WHERE id = $7 RETURNING *;`,
    [
      updatedUser.name,
      updatedUser.email,
      updatedUser.password,
      updatedUser.personality,
      updatedUser.start_date,
      updatedUser.points,
      userId,
    ]
  );
  return response.rows;
}

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUserByUserId,
};

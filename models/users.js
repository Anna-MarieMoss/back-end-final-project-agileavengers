const { query } = require('../db/index');

async function getUserById(userId) {
  const response = await query(
    `SELECT * FROM users
        WHERE id = $1
        ORDER BY id;`,
    [userId]
  );
  return response.rows;
}

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

async function updateUserByUserId(userId, updatedUser) {
  const response = await query(
    `UPDATE users SET (
      name,
      email,
      password,
      personality,
      start_date,
      points
    ) = ($1, $2, $3, $4, $5, $6)
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
  getUserById,
  createUser,
  updateUserByUserId,
};

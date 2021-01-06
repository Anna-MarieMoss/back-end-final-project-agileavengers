const { query } = require('../db/index');

/* GET ALL USERS */

async function getAllUsers() {
  const response = await query(
    `SELECT * FROM users
        ORDER BY id;`
  );
  return response.rows;
}

/* GET USER BY ID */

async function getUserByEmail(email) {
  const response = await query(
    `SELECT * FROM users
        WHERE id = $1
        ORDER BY id;`,
    [email]
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
      newUser.password || 'none',
      newUser.personality || 'none',
      newUser.start_date || 'none',
      0,
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

/* DELETE USER BY ID */

async function deleteUserById(userId) {
  const response = await query(
    `DELETE FROM users
     WHERE id = $1
     RETURNING id;`,
    [userId]
  );
  return response.rows.id;
}

module.exports = {
  getAllUsers,
  getUserByEmail,
  createUser,
  updateUserByUserId,
  deleteUserById,
};

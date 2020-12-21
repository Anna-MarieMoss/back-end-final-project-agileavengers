const { query } = require('../db/index');

async function getUserById(userId) {
  const response = await query(
    `SELECT * FROM posts
        WHERE user_id = $1
        ORDER BY date;`,
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

module.exports = {
  getUserById,
  createUser,
};

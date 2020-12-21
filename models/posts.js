const { query } = require('../db/index');

//gets all posts regardless of user

async function getAllPosts() {
  const response = await query(
    `SELECT * FROM posts
      ORDER BY date;`
  );
  return response.rows;
}

async function getPostsById(id) {
  const response = await query(
    `SELECT * FROM posts
      WHERE user_id = $1
      ORDER BY date;`,
    [id]
  );
  return response.rows;
}

async function getPostsByFavorites(id) {
  const response = await query(
    `SELECT * FROM posts
      WHERE user_id = $1 AND favorite = true
      ORDER BY date;`,
    [id]
  );
  return response.rows;
}

async function deletePostsById(id) {
  const response = await query(
    `DELETE FROM posts
     WHERE id = $1
     RETURNING id;`,
    [id]
  );
  return response.rows.id;
}

module.exports = {
  getAllPosts,
  getPostsById,
  getPostsByFavorites,
  deletePostsById,
};

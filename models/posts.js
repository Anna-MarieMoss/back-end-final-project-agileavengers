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
      WHERE user_id = 1
      ORDER BY date;`, 
      [id]
  );
  return response.rows;
}


module.exports = {
  getAllPosts,
  getPostsById
};

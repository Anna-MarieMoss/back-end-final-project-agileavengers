const { query } = require('../db/index');

//gets all posts regardless of user

async function getAllPosts() {
  const response = await query(
    `SELECT * FROM posts
      ORDER BY date;`
  );
  return response.rows;
}

async function getPostById(userId) {
  const response = await query(
    `SELECT * FROM posts
      WHERE user_id = $1
      ORDER BY date;`,
    [userId]
  );
  return response.rows;
}

async function getPostsByFavorites(userId) {
  const response = await query(
    `SELECT * FROM posts
      WHERE user_id = $1 AND favorite = true
      ORDER BY date;`,
    [userId]
  );
  return response.rows;
}

async function createPost(newPost) {
  const response = await query(
    `INSERT INTO
      posts(user_id, post, multimedia, date, favorite)
      VALUES ($1,$2,$3,$4,$5)
      RETURNING id;`,
    [newPost.user_id, newPost.post, newPost.multimedia, newPost.date, false]
  );
  return response.rows;
}

async function updatePostByPostId(postId, updatedPost) {
  const response = await query(
    `UPDATE posts SET (
      post,
      multimedia,
      date,
      favorite
    ) = ($1, $2, $3, $4)
    WHERE id = $5 RETURNING *;`,
    [
      updatedPost.post,
      updatedPost.multimedia,
      updatedPost.date,
      updatedPost.favorite,
      postId,
    ]
  );
  return response.rows;
}

async function deletePostByPostId(postId) {
  const response = await query(
    `DELETE FROM posts
     WHERE id = $1
     RETURNING id;`,
    [postId]
  );
  return response.rows.id;
}

module.exports = {
  getAllPosts,
  getPostById,
  getPostsByFavorites,
  createPost,
  updatePostByPostId,
  deletePostByPostId,
};

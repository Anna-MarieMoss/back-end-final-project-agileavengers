const { query } = require('../db/index');

  /* GET ALL POSTS FOR ALL USERS */

async function getAllPosts() {
  const response = await query(
    `SELECT * FROM posts
      ORDER BY date;`
  );
  return response.rows;
}

/* GET ALL POSTS FOR A USER */

async function getPostById(userId) {
  const response = await query(
    `SELECT * FROM posts
      WHERE user_id = $1
      ORDER BY date;`,
    [userId]
  );
  return response.rows;
}

/* GET ALL FAVE POSTS FOR A USER */

async function getPostsByFavorites(userId) {
  const response = await query(
    `SELECT * FROM posts
      WHERE user_id = $1 AND favorite = true
      ORDER BY date;`,
    [userId]
  );
  return response.rows;
}

/* POST A NEW POST ENTRY FOR A USER */

async function createPost(newPost) {
  const response = await query(
    `INSERT INTO
      posts(user_id, post, multimedia, date, favorite)
      VALUES ($1,$2,$3,$4,$5)
      RETURNING id;`,
    [newPost.user_id, newPost.post, newPost.multimedia, new Date(), false]
  );
  return response.rows;
}

/* EDIT AN EXISTING POST ENTRY FOR A USER */

async function updatePostByPostId(postId, updatedPost) {
  const response = await query(
    `UPDATE posts SET (
      post,
      multimedia,
      favorite
    ) = ($1, $2, $3)
    WHERE id = $4 RETURNING *;`,
    [updatedPost.post, updatedPost.multimedia, updatedPost.favorite, postId]
  );
  return response.rows;
}

/* DELETE A POST ENTRY FOR A USER */

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

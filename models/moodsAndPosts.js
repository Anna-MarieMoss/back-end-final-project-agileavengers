const { query } = require('../db/index');

async function getMoodsAndPostsById(userId) {
  const response = await query(
    `SELECT posts.user_id, posts.id, moods.mood ,text, image, video, audio, favorite, posts.date
        FROM posts
        INNER JOIN moods
        ON posts.user_id = moods.user_id
        AND posts.date = moods.date
        WHERE posts.user_id = $1
        ORDER BY posts.id DESC;`,
    [userId]
  );
  return response.rows;
}

module.exports = {
  getMoodsAndPostsById,
};

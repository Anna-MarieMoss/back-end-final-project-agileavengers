const { query } = require('../db/index');

async function getMoodsAndPostsById(userId) {
  const response = await query(
    `SELECT posts.user_id, post, favorite, mood, posts.date
        FROM
        posts
        INNER JOIN moods
        ON posts.user_id = moods.user_id
        WHERE posts.user_id = $1
        AND posts.date = moods.date
        ORDER BY posts.date;`,
    [userId]
  );
  return response.rows;
}

module.exports = {
  getMoodsAndPostsById,
};

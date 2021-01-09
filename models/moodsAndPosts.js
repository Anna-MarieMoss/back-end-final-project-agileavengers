const { query } = require('../db/index');

async function getMoodsAndPostsById(userId) {
  const response = await query(
    `SELECT moods.user_id, moods.id, mood, text, image, video, audio, favorite, moods.date
        FROM moods
        INNER JOIN posts
        ON moods.user_id = posts.user_id
        AND moods.date = posts.date
        WHERE moods.user_id = $1
        ORDER BY moods.id DESC;`,
    [userId]
  );
  return response.rows;
}

module.exports = {
  getMoodsAndPostsById,
};

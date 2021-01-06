const postsModel = require('../models/moodsAndPosts');

async function getMoodsAndPostsById(req, res, next) {
  res.json({
    success: true,
    payload: await postsModel.getMoodsAndPostsById(req.params.userId),
  });
}

module.exports = {
  getMoodsAndPostsById,
};

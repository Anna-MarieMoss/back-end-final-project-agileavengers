const postsModel = require('../models/posts');


async function getAllPosts(req, res, next) {
  res.json({
    success: true,
    payload: await postsModel.getAllPosts(),
  });
};

module.exports = {
  getAllPosts,
};

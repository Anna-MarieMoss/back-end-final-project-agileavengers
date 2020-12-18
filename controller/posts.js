const postsModel = require('../models/posts');

const getAllPosts = async (req, res, next) => {
  res.json({
    success: true,
    payload: await postsModel.getAllPosts(),
  });
};

module.exports = {
  getAllPosts,
};

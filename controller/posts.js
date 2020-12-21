const postsModel = require('../models/posts');


async function getAllPosts(req, res, next) {
  res.json({
    success: true,
    payload: await postsModel.getAllPosts(),
  });
};

async function getPostsById(req, res, next) {
  res.json({
    success: true,
    payload: await postsModel.getPostsById(req.params.userId),
  });
};



module.exports = {
  getAllPosts,
  getPostsById
};

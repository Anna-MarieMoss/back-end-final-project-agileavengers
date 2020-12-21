const postsModel = require('../models/posts');

async function getAllPosts(req, res, next) {
  res.json({
    success: true,
    payload: await postsModel.getAllPosts(),
  });
}

async function getPostsById(req, res, next) {
  console.log(req.params);
  res.json({
    success: true,
    payload: await postsModel.getPostsById(req.params.userId),
  });
}

async function getPostsByFavorites(req, res, next) {
  res.json({
    success: true,
    payload: await postsModel.getPostsByFavorites(req.params.userId),
  });
}

async function deletePostsById(req, res, next) {
  res.json({
    success: true,
    payload: await postsModel.deletePostsById(req.params.id),
  });
}

module.exports = {
  getAllPosts,
  getPostsById,
  getPostsByFavorites,
  deletePostsById
};

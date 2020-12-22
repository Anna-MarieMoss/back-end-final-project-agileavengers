const postsModel = require('../models/posts');

async function getAllPosts(req, res, next) {
  res.json({
    success: true,
    payload: await postsModel.getAllPosts(),
  });
}

async function getPostById(req, res, next) {
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

async function createPost(req, res, next) {
  res.json({
    success: true,
    payload: await postsModel.createPost(req.body),
    message: `Created post: "${req.body.post}"`,
  });
}

async function deletePostByPostId(req, res, next) {
  res.json({
    success: true,
    payload: await postsModel.deletePostByPostId(req.params.postId),
    message: `Deleted note with ID: ${req.params.postId}`,
  });
}

module.exports = {
  getAllPosts,
  getPostById,
  getPostsByFavorites,
  createPost,
  deletePostByPostId,
};

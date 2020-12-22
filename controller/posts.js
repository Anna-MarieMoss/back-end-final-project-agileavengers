const postsModel = require('../models/posts');

async function getAllPosts(req, res, next) {
  res.json({
    success: true,
    payload: await postsModel.getAllPosts(),
  });
}

async function getPostById(req, res, next) {
  console.log(req.params);
  res.json({
    success: true,
    payload: await postsModel.getPostById(req.params.userId),
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
    message: `Created post: "${req.body.post}" for ${req.body.user_id}`,
  });
}

async function updatePostByPostId(req, res, next) {
  res.json({
    success: true,
    payload: await postsModel.updatePostByPostId(req.params.postId, req.body),
    message: `Patched post: "${req.body.post}" with ID: ${req.params.postId}`,
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
  updatePostByPostId,
  deletePostByPostId,
};

const postsModel = require('../models/users');

async function getUserById(req, res, next) {
  res.json({
    success: true,
    payload: await postsModel.getUserById(req.params.userId),
  });
}

async function createUser(req, res, next) {
  res.json({
    success: true,
    payload: await postsModel.createUser(req.body),
  });
}

async function updateUserByUserId(req, res, next) {
  res.json({
    success: true,
    payload: await postsModel.updateUserByUserId(req.params.userId, req.body),
    message: `Patched user: "${req.body.post}" with ID: ${req.params.userId}`,
  });
}

module.exports = {
  getUserById,
  createUser,
  updateUserByUserId,
};

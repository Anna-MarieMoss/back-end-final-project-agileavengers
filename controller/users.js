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

module.exports = {
  getUserById,
  createUser,
};

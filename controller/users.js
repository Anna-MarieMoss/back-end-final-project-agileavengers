const postsModel = require('../models/users');

async function getAllUsers(req, res, next) {
  res.json({
    success: true,
    payload: await postsModel.getAllUsers(),
  });
}

async function getUserByEmail(req, res, next) {
  res.json({
    success: true,
    payload: await postsModel.getUserByEmail(req.params.userId),
  });
}

async function createUser(req, res, next) {
  const data = await postsModel.createUser(req.body);
  res.json({
    success: true,
    payload: data,
    message: `User created with Id: ${data[0].id}`,
  });
}

async function updateUserByUserId(req, res, next) {
  res.json({
    success: true,
    payload: await postsModel.updateUserByUserId(req.params.userId, req.body),
    message: `Patched user: '${req.body.post}' with ID: ${req.params.userId}`,
  });
}

async function deleteUserById(req, res, next) {
  res.json({
    success: true,
    payload: await postsModel.deleteUserById(req.params.userId),
    message: `Deleted user with ID: ${req.params.userId}`,
  });
}

module.exports = {
  getAllUsers,
  getUserByEmail,
  createUser,
  updateUserByUserId,
  deleteUserById,
};

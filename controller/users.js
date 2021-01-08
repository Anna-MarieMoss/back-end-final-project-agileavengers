const postsModel = require('../models/users');
const trophyModel = require('../models/trophies');
const trophyTable = require('../db/scripts/trophyTableData');

async function getAllUsers(req, res, next) {
  res.json({
    success: true,
    payload: await postsModel.getAllUsers(),
  });
}

async function getUserByEmail(req, res, next) {
  res.json({
    success: true,
    payload: await postsModel.getUserByEmail(req.params.email),
  });
}

async function createUser(req, res, next) {
  const data = await postsModel.createUser(req.body);
  // add function for creating trophies table all trophies for that user w awarded false
  const userId = data[0].id;
  console.log(trophyTable);
  const createTrophies = await trophyModel.createTrophyTable(
    trophyTable.trophyTable,
    userId
  );
  res.json({
    success: true,
    payload: data,
    message: `User created with Id: ${
      data[0].id
    } and created trophies ${JSON.stringify(createTrophies)}`,
  });
}

async function updateUserByUserId(req, res, next) {
  res.json({
    success: true,
    payload: await postsModel.updateUserByUserId(req.params.userId, req.body),
    message: `Patched user with ID: ${req.params.userId}`,
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

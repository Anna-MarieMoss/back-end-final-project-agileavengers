const trophyModel = require('../models/trophies');

getTrophiesById,
getTrophiesIfReceived,
createTrophy

async function getTrophiesById(req, res, next) {
  res.json({
    success: true,
    payload: await trophyModel.getTrophiesById(req.body),
  });
}

async function createTrophy(req, res, next) {
  res.json({
    success: true,
    payload: await trophyModel.createTrophy(req.body),
  });
}

async function getTrophiesIfReceived(req, res, next) {
  res.json({
    success: true,
    payload: await trophyModel.updateUserByUserId(req.body),
  });
}

module.exports = {
  getUserById,
  createUser,
  updateUserByUserId,
};
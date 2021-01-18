const postsModel = require('../models/trophies');

async function getTrophiesById(req, res, next) {
  res.json({
    success: true,
    payload: await postsModel.getTrophiesById(req.params.userId),
  });
}

async function getAwardedTrophiesById(req, res, next) {
  res.json({
    success: true,
    payload: await postsModel.getAwardedTrophiesById(req.params.userId),
  });
}

async function createTrophy(req, res, next) {
  const data = await postsModel.createTrophy(req.body);
  res.json({
    success: true,
    payload: data,
  });
}

async function updateTrophyByTrophyId(req, res, next) {
  res.json({
    success: true,
    payload: await postsModel.updateTrophyByTrophyId(req.params.trophyId),
    message: `Updated trophy: '${req.params.trophyId}'s' awarded status`,
  });
}

async function updateTrophyByUserIdAndName(req, res, next) {
  res.json({
    success: true,
    payload: await postsModel.updateTrophyByUserIdAndName(
      req.params.userId,
      req.params.name
    ),
    message: `Updated '${req.params.name}' trophy with userId: '${req.params.userId}' to be awarded`,
  });
}

module.exports = {
  getTrophiesById,
  getAwardedTrophiesById,
  createTrophy,
  updateTrophyByTrophyId,
  updateTrophyByUserIdAndName,
};

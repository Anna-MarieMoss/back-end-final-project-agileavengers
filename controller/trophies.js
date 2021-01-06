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
    payload: await postsModel.updateTrophyByTrophyId(req.params.id),
    message: `Updated trophy: '${req.body.trophyName}' to be awarded`,
  });
}

module.exports = {
  getTrophiesById,
  getAwardedTrophiesById,
  createTrophy,
  updateTrophyByTrophyId,
};

const postsModel = require('../models/trophies');

async function getTrophiesById(req, res, next) {
    res.json({
      success: true,
      payload: await postsModel.getTrophiesById(req.body.user_id),
    });
}

async function getAwardedTrophiesById(req, res, next){
  res.json({
    success: true,
    payload: await postsModel.getAwardedTrophiesById(req.body.user_id),
  });
}

async function createTrophy(req, res, next) {
  const data = await postsModel.createTrophy(req.body);
  res.json({
    success: true,
    payload: data
  });
}

module.exports = {
    getTrophiesById,
    getAwardedTrophiesById,
    createTrophy
};
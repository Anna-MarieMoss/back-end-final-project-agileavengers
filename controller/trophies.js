const postsModel = require('../models/trophies');

async function getTrophiesById(req, res, next) {
    res.json({
      success: true,
      payload: await postsModel.getTrophiesById(),
    });
}

async function getAwardedTrophiesById(req, res, next){
  res.json({
    success: true,
    payload: await postsModel.getAwardedTrophiesById(),
  });
}

module.exports = {
    getTrophiesById,
    getAwardedTrophiesById 
};
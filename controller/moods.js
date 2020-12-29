const postsModel = require('../models/moods');

async function getAllMoods(req, res, next) {
  res.json({
    success: true,
    payload: await postsModel.getAllMoods(),
  });
}

async function getMoodById(req, res, next) {
  res.json({
    success: true,
    payload: await postsModel.getMoodById(req.params.userId),
  });
}

async function createMood(req, res, next) {
  res.json({
    success: true,
    payload: await postsModel.createMood(req.body),
    message: `Added mood entry with mood: "${req.body.mood}"`,
  });
}

module.exports = {
  getAllMoods,
  getMoodById,
  createMood,
};

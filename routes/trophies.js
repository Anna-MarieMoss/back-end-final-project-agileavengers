const express = require('express');
const router = express.Router();

const trophiesController = require('../controller/trophies');

/* GET trophies by user ID */
router.get('/:userId', trophiesController.getTrophiesById);

/* GET awarded trophies by user ID */
router.get('/:userId/awarded', trophiesController.getAwardedTrophiesById);

module.exports = router;
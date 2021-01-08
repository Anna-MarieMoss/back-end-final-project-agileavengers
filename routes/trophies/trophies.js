const express = require('express');
const router = express.Router();

const trophiesController = require('../../controller/trophies');

/* GET trophies by user ID */
router.get('/:userId', trophiesController.getTrophiesById);

/* GET awarded trophies by user ID */
router.get('/:userId/awarded', trophiesController.getAwardedTrophiesById);

/* POST new trophy */
router.post('/', trophiesController.createTrophy);

/* UPDATE existing trophy */
router.patch('/:trophyId', trophiesController.updateTrophyByTrophyId);

module.exports = router;

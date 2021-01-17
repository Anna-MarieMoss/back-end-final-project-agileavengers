const express = require('express');
const router = express.Router();

const trophiesController = require('../../controller/trophies');

/* GET trophies by user ID */
router.get('/:userId', trophiesController.getTrophiesById);

/* GET awarded trophies by user ID */
router.get('/:userId/awarded', trophiesController.getAwardedTrophiesById);

/* POST new trophy */
router.post('/', trophiesController.createTrophy);

/* UPDATE existing trophy by Id */
router.patch('/:trophyId', trophiesController.updateTrophyByTrophyId);

/* UPDATE existing trophy by userId and name*/
router.patch('/:userId/:name', trophiesController.updateTrophyByUserIdAndName);

module.exports = router;

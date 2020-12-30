const express = require('express');
const router = express.Router();

const trophyController = require('../../controller/trophies');

/* GET trophies by ID */
router.get('/:userId', trophyController.getTrophiesById);

/* GET trophies for all awarded = true; */
router.get('/', trophyController.getTrophiesIfReceived);

/* POST new trophy */
router.post('/', trophyController.createTrophy);

module.exports = router;
const express = require('express');
const router = express.Router();

const moodsController = require('../controller/moods');

/* GET all mood entries */
router.get('/', moodsController.getAllMoods);

/* GET mood entry by ID */
router.get('/:userId', moodsController.getMoodById);

/* POST new mood entry */
router.post('/', moodsController.createMood);

module.exports = router;

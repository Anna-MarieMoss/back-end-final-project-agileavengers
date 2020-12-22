const express = require('express');
const router = express.Router();

const postsController = require('../controller/moods');

/* GET all mood entries */
router.get('/', postsController.getAllMoods);

/* GET mood entry by ID */
router.get('/:userId', postsController.getMoodById);

/* POST new mood entry */
router.post('/', postsController.createMood);

module.exports = router;

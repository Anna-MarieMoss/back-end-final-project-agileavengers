const express = require('express');
const router = express.Router();

const moodsAndPostsController = require('../controller/moodsAndPosts');

/* GET moods and posts by ID */
router.get('/:userId', moodsAndPostsController.getMoodsAndPostsById);

module.exports = router;

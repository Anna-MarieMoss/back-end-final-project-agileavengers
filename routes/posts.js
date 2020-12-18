const express = require('express');
const router = express.Router();

const postsController = require('../controller/posts');

/* GET users listing. */
router.get('/', postsController.getAllPosts);

module.exports = router;

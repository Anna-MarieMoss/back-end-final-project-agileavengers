const express = require('express');
const router = express.Router();

const postsController = require('../controller/posts');

/* GET all posts */
router.get('/', postsController.getAllPosts);


/* GET posts by ID */
router.get('/:userId', postsController.getPostsById);


module.exports = router;

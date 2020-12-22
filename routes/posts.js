const express = require('express');
const router = express.Router();

const postsController = require('../controller/posts');

/* GET all posts */
router.get('/', postsController.getAllPosts);

/* GET post by ID */
router.get('/:userId', postsController.getPostById);

/* GET post by ID and favorites */
router.get('/:userId/fave', postsController.getPostsByFavorites);

/* POST new post */
router.post('/', postsController.createPost);

/* UPDATE existing post */
router.patch('/:postId', postsController.updatePostByPostId);

/* DELETE individual posts by it's unique ID*/
router.delete('/:postId', postsController.deletePostByPostId);

module.exports = router;

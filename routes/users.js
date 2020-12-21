const express = require('express');
const router = express.Router();

const postsController = require('../controller/users');

/* GET user by ID */
router.get('/:userId', postsController.getUserById);

/* POST new user */
router.post('/', postsController.createUser);

module.exports = router;

const express = require('express');
const router = express.Router();

const usersController = require('../controller/users');

/* GET user by ID */
router.get('/:userId', usersController.getUserById);

/* POST new user */
router.post('/', usersController.createUser);

router.patch('/:userId', usersController.updateUserByUserId);

module.exports = router;

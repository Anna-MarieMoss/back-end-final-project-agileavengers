const express = require("express");
const router = express.Router();

const usersController = require("../../controller/users");

/* GET all users */
router.get("/", usersController.getAllUsers);

/* GET user by ID */
router.get("/:userId", usersController.getUserById);

/* POST new user */
router.post("/", usersController.createUser);

/* UPDATE existing user */
router.patch("/:userId", usersController.updateUserByUserId);

module.exports = router;

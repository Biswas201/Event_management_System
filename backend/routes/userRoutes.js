const express = require('express');
const { register, login } = require("../controller/userController.js");
const router = express.Router();

// POST /api/users/register - Register a new user
router.post('/register', register);

// POST /api/users/login - Login an existing user
router.post('/login', login);

module.exports = router;

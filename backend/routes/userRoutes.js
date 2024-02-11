const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController');

// POST route for user signup
router.post('/signup', UserController.signup);

// POST route for user login
router.post('/login', UserController.login);

module.exports = router;


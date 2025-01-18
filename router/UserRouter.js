const express = require('express');

const userController = require('../controller/UserController');

const router = express.Router();

router.get('/api/signup', userController.getSignup);
router.post('/api/signup', userController.createUser);
router.get('/api/login', userController.getLogin);
router.post('/api/login', userController.loginUser);
router.post('/api/logout', userController.logoutUser);

module.exports = router;

const express = require('express');

const userController = require('../controller/UserController');
const uploadMiddleware = require('../middleware/UploadMiddleware');
const authMiddleware = require('../middleware/AuthMiddleware');

const dotenv = require('dotenv');

const router = express.Router();

dotenv.config();

router.get('/api/signup', userController.getSignup);
router.post('/api/signup', userController.createUser);
router.get('/api/login', userController.getLogin);
router.post('/api/login', userController.loginUser);
router.post('/api/logout', userController.logoutUser);
router.put(
  '/api/profile',
  authMiddleware,
  uploadMiddleware.uploadMiddleware(process.env.USER_PROFILE_IMAGE_PATH),
  userController.updateUserProfile
);

module.exports = router;

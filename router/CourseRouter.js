const express = require('express');

const courseController = require('../controller/CourseController');

const router = express.Router();

// courses
router.post('/api/courses', courseController.createCourse);
router.get('/api/courses', courseController.getCourseList);
router.get('/api/posts/:courses', courseController.getCourse);
router.put('/api/posts/:courses', courseController.updateCourse);
router.delete('/api/posts/:postId', courseController.deleteCourse);

module.exports = router;

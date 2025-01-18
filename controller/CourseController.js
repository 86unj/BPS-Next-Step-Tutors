const Course = require('../model/Course');
const Utils = require('../util/Utils');
const CourseService = require('../service/CourseService');

exports.createCourse = async (req, res, next) => {
    try {
        const {course_name, description} = req.body;

        if (!course_name || !description) {
            return Utils.response(res, 400, 'Please provide all the required fields');
        }

        const course = await CourseService.createCourse({course_name, description});

        return Utils.response(res, 201, 'Course created successfully', course);
    }
    catch (err) {
        return Utils.response(res, 500, err.message);
    }
};

exports.getCourseList = async (req, res, next) => {
    try {
    const courses = await CourseService.getCourseList();

    return Utils.response(res, 200, 'Courses fetched successfully', courses);
    }
    catch (err) {
        return Utils.response(res, 500, err.message);
    }
};

exports.getCourse = async (req, res, next) => {
    try {
        const courseId = req.params.courses;
        const course = await CourseService.getCourse(courseId);
    
        if (!course) {
            return Utils.response(res, 404, 'Course not found');
        }

        return Utils.response(res, 200, 'Course fetched successfully', course);
    }
    catch (err) {
        return Utils.response(res, 500, err.message);
    }
};

exports.updateCourse = (req, res, next) => {
    try {
        const courseId = req.params.courses;
        const {course_name, description} = req.body;
        const updatedCourse = await CourseService.updateCourse(courseId, {course_name, description});
    
        if (!updatedCourse) {
            return Utils.response(res, 404, 'Course not found');
        }

        return Utils.response(res, 200, 'Course updated successfully', updatedCourse);
    }
    catch (err) {
        return Utils.response(res, 500, err.message);
    }
};

exports.deleteCourse = (req, res, next) => {
    try {
        const courseId = req.params.courses;
        const {course_name, description} = req.body;
        const updatedCourse = await CourseService.deleteCourse(courseId, {course_name, description});
    
        if (!updatedCourse) {
            return Utils.response(res, 404, 'Course not found');
        }

        return Utils.response(res, 200, 'Course deleted successfully', updatedCourse);
    }
    catch (err) {
        return Utils.response(res, 500, err.message);
    }
};

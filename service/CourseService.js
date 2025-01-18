exports.createCourse = async (courseData) => {
    try {
        const course = await Course.create(courseData);
        return course;
    } 
    catch (err) {
        console.error('Error fetching course: ', err);
        throw new Error('Failed to create course');
    }
};

exports.getCourseList = async () => {
    try {
        const course = await Course.findAll();
        return course;
    } 
    catch (err) {
        console.error('Error fetching courses: ', err);
        throw new Error('Failed to fetch course list');
    }
};

exports.getCourse = async (courseId) => {
    try {
        const course = await Course.findByPk(courseId);
        return course;
    } 
    catch (err) {
        console.error('Error fetching course: ', err);
        throw new Error('Failed to fetch course');
    }
};

exports.updateCourse = async (courseId, courseData) => {
    try {
        const course = await Course.findByPk(courseId);

        if (!course) {
            return null;
        }

        await course.update(courseData);
        
        return course;
    } 
    catch (err) {
        console.error('Error updating course: ', err);
        throw new Error('Failed to update course');
    }
};

exports.deleteCourse = async (courseId) => {
    try {
        const course = await Course.findByPk(courseId);

        if (!course) {
            return null;
        }

        await course.destroy();
        
        return course;
    } 
    catch (err) {
        console.error('Error deleting course: ', err);
        throw new Error('Failed to delete course');
    }
};

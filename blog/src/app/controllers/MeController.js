const Course = require('../models/Course');
const { mutipleMongooseToObject } = require('../../until/mongoose');

class CourseController {
    // [GET] /me/courses
    storedCourses(req, res, next) {
        Course.find({})
            .then((courses) => {
                res.render('me/stored-courses', {
                    courses: mutipleMongooseToObject(courses),
                });
            })
            .catch(next);
    }
}

module.exports = new CourseController();

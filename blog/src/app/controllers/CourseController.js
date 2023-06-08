const Course = require('../models/Course');
const { mongooseToObject } = require('../../until/mongoose');


class CourseController {
    // [GET] /courses/:slug 
    // course detail
    show(req, res, next) {
        // res.send('Course Detail ' + req.params.slug);
        Course.findOne({slug: req.params.slug}) 
            .then((course) => {
                res.render("courses/show", 
                {
                    course: mongooseToObject(course),
                });
            })
            .catch(next);

        //res.render('home');
    }

    // [GET] /courses/create
    create(req, res, next) {
        res.render("courses/create")
    }

    // [POST] /courses/store
    store(req, res, next) {
        const data = req.body;
        const course = new Course(data);
        course.save()
            .then(() => res.redirect('/home'))
            .catch(next)
        ;
    }

}

module.exports = new CourseController();

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

    // [GET] /courses/:id/edit
    edit(req, res, next) {
        Course.findById(req.params.id)
            .then(course => res.render("courses/edit", {
                course: mongooseToObject(course),
            }))
            .catch(next)
    }

    // [PUT] /courses/:id
    update(req, res, next) {
        Course.updateOne({_id: req.params.id}, req.body )
            .then(() =>{
                //res.json(req.body)
                res.redirect('/me/stored/courses')
            })
            .catch(next)
        ;
    }

    // [DELETE] /courses/delete/:id
    delete(req, res, next) {
        Course.findByIdAndDelete({_id: req.body._id})
            .then(() => res.redirect('/me/stored/courses'))
            .catch(next)
        ;
    }


}

module.exports = new CourseController();

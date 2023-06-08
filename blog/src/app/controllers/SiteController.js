const Course = require('../models/Course');
const {mutipleMongooseToObject} = require('../../until/mongoose');

class SiteController {
    // [GET] /
    index(req, res) {
        res.render('helloworld');
    }

    // [GET] /home
    home(req, res, next) {
        Course.find({})
            .then((courses) => {
                res.render('home', {
                    courses: mutipleMongooseToObject(courses),
                });
                // res.json(courses);
            })
            .catch((err) => next(err));

        //res.render('home');
    }

    //[GET] /search
    search(req, res) {
        console.log(req.query.q);
        console.log(req.query.sex);
        console.log(req.query.ref);
        res.render('search');
    }
}

module.exports = new SiteController();

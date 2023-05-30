class SiteController {

    // [GET] /
    index(req, res) {
        res.render('helloworld');
    }

    // [GET] /home
    home(req, res) {
        res.render('home');
    }

    //[GET] /search
    search(req, res) {
        console.log(req.query.q);
        console.log(req.query.sex);
        console.log(req.query.ref);
        res.render('search');
    }
}

module.exports = new SiteController;
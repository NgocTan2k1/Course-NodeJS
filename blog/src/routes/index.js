const newsRouter = require('./news.js');
const siteRouter = require('./site.js');
const courseRouter = require('./courses.js');
function Route(app) {
    app.use('/news', newsRouter);
    app.use('/courses', courseRouter);
    app.use('/', siteRouter);
}

module.exports = Route;

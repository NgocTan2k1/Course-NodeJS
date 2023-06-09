const newsRouter = require('./news.js');
const siteRouter = require('./site.js');
const courseRouter = require('./courses.js');
const meRouter = require('./me.js');
function Route(app) {
    app.use('/news', newsRouter);
    app.use('/courses', courseRouter);
    app.use('/me', meRouter);
    app.use('/', siteRouter);
}

module.exports = Route;

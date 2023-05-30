const newsRouter = require('./news.js');
const siteRouter = require('./site.js');
function Route(app) {
    app.use('/news', newsRouter);
         app.use('/', siteRouter)
}

module.exports = Route;

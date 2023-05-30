const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const exp = require('constants');
const Route = require('./routes');

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

// HTTP logger
app.use(morgan('combined'));

// Template engine & set file
app.engine(
    'hbs',
    handlebars.engine({
        extname: '.hbs',
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, '/resources/views'));

// Route init
Route(app);

// run server
app.listen(port, () => {
    console.log(`Example app listening on port: http://127.0.0.1:${port}`);
});

const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const exp = require('constants');

const app = express()
const port = 3000

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({
  extended: true,
}));
app.use(express.json());

// HTTP logger
app.use(morgan('combined'));

// Template engine

app.engine('hbs', handlebars.engine({
  extname: ".hbs"
}));
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, '/resources/views'));

app.get('/home', (req, res) => {
  res.render('home');
})

app.get('/news', (req, res) => {
  res.render('news');
});

app.get('/search', (req, res) => {
  console.log(req.query.q);
  console.log(req.query.sex);
  console.log(req.query.ref);
  res.render('search');
});

app.post('/search', (req, res) => {
  res.send(`Name: ${req.body.q}, Gender: ${req.body.gender}`);
});

app.get('/', (req, res) => {
  res.render('helloworld')
})

app.listen(port, () => {
  console.log(`Example app listening on port: http://127.0.0.1:${port}`)
})
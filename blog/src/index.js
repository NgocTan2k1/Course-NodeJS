const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const exp = require('constants');

const app = express()
const port = 3000

app.use(express.static(path.join(__dirname, 'public')));
console.log(path.join(__dirname, 'public'))
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
})

app.get('/', (req, res) => {
  res.render('helloworld')
})

app.listen(port, () => {
  console.log(`Example app listening on port: http://127.0.0.1:${port}`)
})
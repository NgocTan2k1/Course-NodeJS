const express = require('express')
const morgan = require('morgan');
const app = express()
const port = 3000

app.use(morgan('combined'));
app.get('/home', (req, res) => {
    res.send(
      `<h1 style='color: red'>Hello World!</h1>`
    )
})

app.listen(port, () => {
  console.log(`Example app listening on port: http://127.0.0.1:${port}`)
})
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const db = require('./routes')
const port = 3000

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.post('/register', db.registerUser)
app.post('/login', db.loginUser)

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})
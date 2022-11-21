const express = require('express')
const exphbs = require('express-handlebars')
const PORT = 3000
const routes = require('./routes')
require('./config/mongoose')

const app = express()

app.engine('handlebars', exphbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

app.use(express.urlencoded({ extended: true }))

app.use(routes)

app.listen(PORT, () => {
  console.log(`App is running on http://localhost:${PORT}!`)
})

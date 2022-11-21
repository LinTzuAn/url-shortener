const express = require('express')
const exphbs = require('express-handlebars')
const PORT = 3000

require('./config/mongoose')

const app = express()

app.engine('handlebars', exphbs({defaultLayouts: 'main'}))
app.set('view engine', 'handlebars')

app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.render('index')
})

app.listen(PORT, () => {
  console.log(`App is running on http://localhost:${PORT}!`)
})
const express = require('express')
const app = express()
const PORT = 3000

const exphbs = require('express-handlebars')

app.engine('handlebars', exphbs({defaultLayouts: 'main'}))
app.set('view engine', 'handlebars')

app.get('/', (req, res) => {
  res.render('index')
})

app.listen(PORT, () => {
  console.log(`App is running on http://localhost:${PORT}!`)
})
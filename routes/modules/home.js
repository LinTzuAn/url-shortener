const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.render('index')
  console.log(req.query)
})

module.exports = router
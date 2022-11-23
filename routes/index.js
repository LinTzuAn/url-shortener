const express = require('express')
const router = express.Router()

const home = require('./modules/home')
const site = require('./modules/site')

router.use('/', home)
router.use('/', site)

module.exports = router

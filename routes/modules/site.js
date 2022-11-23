const express = require('express')
const router = express.Router()
const Url = require('../../models/url')

router.get('/:id', (req, res) => {
  const params = req.params.id
  return Url.find({ id: params })
    .lean()
    .then(item => {
      res.redirect(item[0].originalURL)
    })
    .catch(error => console.log(error))
})

module.exports = router

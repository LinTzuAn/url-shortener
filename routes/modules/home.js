const express = require('express')
const generateId = require('../../generateId')
const router = express.Router()
const Url = require('../../models/url')

router.get('/', (req, res) => {
  res.render('index')
})

router.post('/', (req, res) => {
  const input = req.body.input

  Url.find()
  .lean()
  .then(urls => {
    const existingUrl = urls.find(
      url => {return url.originalURL.includes(input)
    })
    if (existingUrl) {
      shortenedURL = `http://localhost:3000/${existingUrl.id}`
      return res.render('index', { shortenedURL })
    } else {
      let data = {originalURL: `${input}`}
      data.id = generateId()
      shortenedURL = `http://localhost:3000/${data.id}`
      return Url.create(data)
        .then(() => res.render('index', { shortenedURL }))
        .catch(error => console.log(error))
    }
  })
  .catch(error => console.log(error))
})

router.get('/:id', (req,res) => {
  const params = req.params.id
  return Url.find({id: params})
    .lean()
    .then(item => {
      res.redirect(item[0].originalURL)
    })
    .catch(error => console.log(error))
})

module.exports = router

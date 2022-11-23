const express = require('express')
const generateId = require('../../generateId')
const router = express.Router()
const Url = require('../../models/url')
const BASE_URL = 'http://localhost:3000/'

router.get('/', (req, res) => {
  res.render('index')
})

router.post('/', (req, res) => {
  const input = req.body.input

  Url.find()
    .lean()
    .then(urls => {
    // 檢查網址是否已存在資料庫中
      const existingUrl = urls.find(url => url.originalURL === input)
      // 若已存在則將網址組合，並顯示於畫面上
      if (existingUrl) {
        const shortenedURL = BASE_URL + existingUrl.id
        return res.render('index', { shortenedURL })
        // 若不存在則新增至資料庫，再將網址組合，並顯示於畫面上
      } else {
        const data = { originalURL: `${input}` }
        data.id = generateId()
        const shortenedURL = BASE_URL + data.id
        return Url.create(data)
          .then(() => res.render('index', { shortenedURL }))
          .catch(error => console.log(error))
      }
    })
    .catch(error => console.log(error))
})

module.exports = router

const express = require('express')
const generateId = require('../../generateId')
const router = express.Router()
const Url = require('../../models/url')
const siteUrl = 'http://localhost:3000/site/'

router.get('/', (req, res) => {
  res.render('index')
})

router.post('/', (req, res) => {
  const input = req.body.input
  
  Url.find()
  .lean()
  .then(urls => {
    // 檢查網址是否已存在資料庫中
    const existingUrl = urls.find(
      url => {return url.originalURL.includes(input)
    }) 
    // 若已存在則直接顯示於畫面上
    if (existingUrl) {
      shortenedURL = siteUrl + existingUrl.id
      return res.render('index', { shortenedURL })
    // 若不存在則新增至資料庫，並顯示於畫面上
    } else {
      let data = { originalURL: `${input}` } 
      data.id = generateId()
      shortenedURL = siteUrl + data.id
      return Url.create(data) 
        .then(() => res.render('index', { shortenedURL })) 
        .catch(error => console.log(error))
    }
  })
  .catch(error => console.log(error))
})

module.exports = router

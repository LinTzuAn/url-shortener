const Url = require('../url')
const db = require('../../config/mongoose')

db.once('open', () => {
  for (let i = 0; i < 1; i++) {
    Url.create({ originalURL: 'test-url' })
  }

  console.log('done')
})

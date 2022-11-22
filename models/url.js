const mongoose = require('mongoose')
const Schema = mongoose.Schema
const urlSchema = new Schema({
  originalURL: {
    type: String,
    required: true,
    unique: true
  },
  id: {
    type: String
  }
})
  
module.exports = mongoose.model('URL', urlSchema)
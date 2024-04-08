const mongoose = require('mongoose')

const cardSchema = new mongoose.Schema({
  title: String,
  description: String,
  story: String,
  img: String,
})

const Card = mongoose.model('Card', cardSchema)

module.exports = Card

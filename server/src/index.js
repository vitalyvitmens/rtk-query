require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const { cardsRouter } = require('./routes/cards.js')
const cors = require('cors')
const mongoose = require('mongoose')

const PORT = process.env.PORT || 5000
const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use('/api', cardsRouter)

mongoose.connect(process.env.DB_CONNECTION_STRING).then(() => {
  app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`)
    console.log(`Server has been started on port ${PORT}...`)
  })
})

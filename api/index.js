const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')


const api = express()
const router = require('./routes/router')

mongoose.connect(
  process.env.MONGO_URL || 'mongodb://localhost:27017/',
  {
    dbName: process.env.MONGO_DB || 'Trivia',
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  },
  (err) => {
    if (err) {
      console.log(`DB Error: ${err}`)
      return
    }
    console.log('Connected to DB')
    // Init server
    api
      .use(morgan('dev'))
      .use(express.json())
      .use('/api', router)
      .listen(8080, (err) => {
        console.info('\n\n' + '>'.repeat(40))
        console.info('💻  Reboot Server Live')
        console.info('📡  PORT: http://localhost:8080')
        console.info('>'.repeat(40) + '\n\n')
        if (err) throw new Error(err)
      })
  }
)

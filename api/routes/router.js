const router = require('express').Router()

const questionRouter = require('./question.router')

router.use('/questions', questionRouter)

module.exports = router

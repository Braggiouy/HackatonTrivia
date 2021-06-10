const router = require('express').Router()

const {
  getAllQuestions,
  getQuestionById,
  getQuestionByCategory,
  getQuestionByDifficulty,
  getQuestionByRandom
} = require('../controllers/question.controller')

router.get('/', getAllQuestions)
router.get('/random', getQuestionByRandom)
router.get('/category/:category', getQuestionByCategory)
router.get('/difficulty/:difficulty', getQuestionByDifficulty)
router.get('/:id', getQuestionById)

module.exports = router

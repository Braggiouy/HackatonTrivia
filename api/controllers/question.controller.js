const questionModel = require('../models/questions.schema')

function getAllQuestions(req, res) {
  questionModel
    .find()
    .then(questions => res.json(questions))
    .catch((err) => res.json(err))
}

function getQuestionById(req, res) {
  questionModel.findById(req.params.id)
    .then(question => res.json(question))
    .catch((err) => res.json(err))
}

function getQuestionByRandom(req, res) {
  questionModel
    .find()
    .then(questions => {
      const randomIndex = Math.floor(Math.random() * questions.length)
      res.json(questions[randomIndex])})
    .catch((err) => res.json(err))
}

function getQuestionByCategory(req, res) {
  questionModel
    .find({ category: req.params.category })
    .then(category => res.json(category))
    .catch((err) => res.json(err))
}

function getQuestionByDifficulty (req, res) {
  questionModel
    .find({ difficulty: req.params.difficulty })
    .then(category => res.json(category))
    .catch((err) => {
      console.log(err)
      res.json(err)})
}

module.exports = {
  getAllQuestions,
  getQuestionById,
  getQuestionByCategory,
  getQuestionByDifficulty,
  getQuestionByRandom
}

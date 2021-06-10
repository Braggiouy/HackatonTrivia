
const axios = require('axios')

const api = axios.create({
  baseURL: 'https://localhost:8080/api',
  timeout: 3000
})


api
  .get('/random')
  .then(question => {
    document.getElementsByClassName('questionBox')[0].firstChild.innerText = question.question
    const allAnswers = question.incorrect_answers.slice()
    const randomIndex = Math.floor(Math.random() * 5)
    allAnswers.splice(randomIndex, 0, question.correct_answer)
    const buttons = document.getElementsByClassName('answer')
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].firstChild.innerText = allAnswers[i]
    }
  })
  .catch(err => console.log('Error: ', err))

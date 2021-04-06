const Loader = require('./loader.js')
const Questions = require('./questions.js')
const loader = new Loader()
const path = './src/day_6/data.txt'
const result = loader.load(path)
const questions = new Questions(result)

console.log("First problem: ",questions.countAllAnswers())

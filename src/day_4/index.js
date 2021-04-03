const Loader = require('./loader.js')
const Validator = require('./validator.js')
const loader = new Loader()
const path = './src/day_4/data.txt'
const result = loader.load(path)
const validator = new Validator(result)

console.log("First problem: ",validator.countValidFields())

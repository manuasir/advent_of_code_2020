const data = require('./data')
const Validator = require('./validator')

const op = new Validator(data)
console.log("First problem: ",op.process())
console.log("Second problem: ",op.process_updated())

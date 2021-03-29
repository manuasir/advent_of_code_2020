const data = require('./data')
const Operation = require('./op')

const op = new Operation(data)
console.log("First problem: ",op.calculate(2020))
console.log("Second problem: ",op.calculate_two(2020))
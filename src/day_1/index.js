const data = require('./data')
const Operation = require('./op')

const op = new Operation(data)
console.log(op.calculate())
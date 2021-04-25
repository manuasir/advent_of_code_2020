const Luggage = require('./luggage')
const Loader = require('./loader')

const loader = new Loader()
const loadedData = loader.load('./src/day_7/data')
const op = new Luggage(loadedData)
console.log("First problem: ", op.getAllBags(`shiny gold`))

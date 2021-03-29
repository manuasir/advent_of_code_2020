const Location = require('./location')
const Loader = require('./loader')

const arr = [
    [1, 1],
    [1, 3],
    [1, 5],
    [1, 7],
    [2, 1]
]

const loader = new Loader()
const loadedData = loader.load('./src/day_3/data')
const op = new Location(loadedData)
console.log("First problem: ", op.process(0,0,1,3))
console.log("Second problem: ", op.sum(arr))
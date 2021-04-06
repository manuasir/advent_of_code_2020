const Loader = require('./loader.js')
const BinaryTree = require('./binary-tree')
const loader = new Loader()
const path = './src/day_5/data.txt'
const seats = loader.load(path)
const tree = new BinaryTree()
const ids = seats.map((seat) => {
    return tree.getSeat(seat)
})

const highestId = Math.max(...ids)

console.log('Highest ID: ',highestId)

const Loader = require('../../src/day_5/loader.js')
const BinTree = require('../../src/day_5/binary-tree.js')

describe('Day 5', () => {
  const loader = new Loader()
  const path = './test/day_5/mock.txt'
  const rows = loader.load(path)
  describe('Loader', () => {
    test('Number of rows should be 3', () => {
      expect(rows.length).toEqual(3)
    })
  })
})

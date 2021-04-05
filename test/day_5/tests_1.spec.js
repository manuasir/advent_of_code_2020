
const Loader = require('../../src/day_5/loader.js')
const BinTree = require('../../src/day_5/binary-tree.js')

describe('Day 5', () => {
  const loader = new Loader()
  const path = './test/day_5/mock.txt'
  const rows = loader.load(path)
  describe('Loader', () => {
    test('Number of rows should be 4', () => {
      expect(rows.length).toEqual(4)
    })
  })
  describe('getRow first mock', () => {
    test('Position should be 44', () => {
      const tree = new BinTree()
      const result = tree.getRow(rows[0],'0-127',0)
      expect(result).toEqual(44)
    })
    test('Position should be 70', () => {
      const tree = new BinTree()
      const result = tree.getRow(rows[1],'0-127',0)
      expect(result).toEqual(70)
    })
    test('Position should be 14', () => {
      const tree = new BinTree()
      const result = tree.getRow(rows[2],'0-127',0)
      expect(result).toEqual(14)
    })
    test('Position should be 102', () => {
      const tree = new BinTree()
      const result = tree.getRow(rows[3],'0-127',0)
      expect(result).toEqual(102)
    })
    test('Column should be 7', () => {
      const tree = new BinTree()
      const result = tree.getColumn(rows[1],'0-7',0)
      expect(result).toEqual(7)
    })
    test('Column should be 7', () => {
      const tree = new BinTree()
      const result = tree.getColumn(rows[2],'0-7',0)
      expect(result).toEqual(7)
    })
    test('Column should be 4', () => {
      const tree = new BinTree()
      const result = tree.getColumn(rows[3],'0-7',0)
      expect(result).toEqual(4)
    })
  })
})

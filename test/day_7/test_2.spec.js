

const Loader = require('../../src/day_7/loader.js')
const Bag = require('../../src/day_7/bag.js')
describe('Day 7', () => {
  const loader = new Loader()
  const path = './test/day_7/mock_bags.txt'
  const result = loader.load(path)
  describe('Loader', () => {
    test('Number of rows', () => {
      expect(result.length).toEqual(7)
    })
  })
  describe('Bag type', () => {
    test('Create correct object', () => {
      const bag = new Bag("shiny gold bags contain 2 dark red bags.")
      expect(bag instanceof Bag).toEqual(true)
    })
    test('Create wrong object, should throw an error', () => {
      expect(() => {
        new Bag("shiny gold")
      }).toThrow('Incorrect format.')
    })
    test('Get formatted multiple bags', () => {
      const bag = new Bag("wavy olive bags contain 5 mirrored tan bags, 5 vibrant lime bags, 3 dull lime bags, 5 dim lime bags.")
      const result = bag.parseData()
      expect(result).toMatchObject({
        type: 'wavy olive', bags: [
          ["5", 'mirrored tan'], ["5", 'vibrant lime'], ["3", 'dull lime'], ["5", 'dim lime']
        ]
      })
    })
    test('Get formatted single bag', () => {
      const bag = new Bag("light turquoise bags contain 5 pale tan bags.")
      const result = bag.parseData()
      expect(result).toMatchObject({
        type: 'light turquoise', bags: [
          ["5", 'pale tan']
        ]
      })
    })
    test('Get formatted several bags', () => {
      const bag = new Bag("pale maroon bags contain 3 bright orange bags, 1 light lime bag, 5 pale red bags.")
      const result = bag.parseData()
      expect(result).toMatchObject({
        type: 'pale maroon', bags: [
          ["3", 'bright orange'], ["1", 'light lime'], ["5", 'pale red']
        ]
      })
    })
  })
})

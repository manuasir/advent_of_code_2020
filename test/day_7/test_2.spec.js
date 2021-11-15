

const Loader = require('../../src/day_7/loader.js')
const Bag = require('../../src/day_7/bag.js')
const Bags = require('../../src/day_7/bags.js')

describe('Day 7', () => {
  const loader = new Loader()
  const path = './test/day_7/mock_bags.txt'
  const finalRawData = './src/day_7/data'
  const result = loader.load(path)
  const finalData = loader.load(finalRawData)

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
    test('Get formatted several bags', () => {
      const bag = new Bag("dim beige bags contain 5 striped red bags, 1 pale orange bag.")
      const result = bag.parseData()
      expect(result).toMatchObject({
        type: 'dim beige', bags: [
          ["5", 'striped red'], ["1", 'pale orange']
        ]
      })
    })
    test('Get formatted several bags', () => {
      const bag = new Bag("clear orange bags contain 1 striped lavender bag, 5 drab blue bags, 5 dim fuchsia bags.")
      const result = bag.parseData()
      expect(result).toMatchObject({
        type: 'clear orange', bags: [
          ["1", 'striped lavender'], ["5", 'drab blue'], ["5", 'dim fuchsia']
        ]
      })
    })
    test('Get a bag without bags inside', () => {
      const bag = new Bag("drab brown bags contain no other bags.")
      const result = bag.parseData()
      expect(result).toMatchObject({
        type: 'drab brown', bags: []
      })
    })
  })
  describe('Bags class', () => {
    const bags = new Bags(Bag, result)
    bags.load()
    test('Create correct object', () => {
      expect(bags instanceof Bags).toEqual(true)
    })
    test('Get total bags', () => {
      expect(bags.total()).toEqual(7)
    })
    test('Get bag by type', () => {
      expect(bags.getBagByType('dark green') instanceof Bag).toEqual(true)
    })
    test('Get bag by type', () => {
      expect(bags.getBagByType('dark green').getType()).toEqual('dark green')
    })
    test('Get bags of bag', () => {
      expect(Array.isArray(bags.getBagByType('dark green').getBags())).toEqual(true)
      expect(bags.getBagByType('dark green').getBags().length).toEqual(1)
      expect(bags.getBagByType('dark green').getBags()).toMatchObject(
        [
          ["2", 'dark blue']
        ]
      )
    })
    describe('Bags algorithm', () => {
      test('Sum should be 126', () => {
        expect(bags.sumQuantities('shiny gold')).toEqual(126)
      })
    })
    describe('Final algorithm', () => {
      test('Checking algorithm with full data', () => {
        const bags = new Bags(Bag, finalData)
        bags.load()
        expect(bags.sumQuantities('shiny gold')).toEqual(6006)
      })
    })
  })

})

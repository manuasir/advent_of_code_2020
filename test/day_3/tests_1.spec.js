

const Loader = require('../../src/day_3/loader.js')
const Location = require('../../src/day_3/location.js')

describe('Day 3', () => {
  const loader = new Loader()
  const path = './test/day_3/mock.txt'
  const result = loader.load(path)
  const location = new Location(result)
  describe('Loader', () => {
    it('Number of rows', () => {
      expect(result.length).toEqual(11)
    })
    it('First row first character', () => {
      expect(result[0][0]).toEqual('.')
    })
    it('Last row last character', () => {
      expect(result[result.length - 1][result.length - 1]).toEqual('#')
    })
  })
  describe('Locations', () => {
    describe('Count trees', () => {
      it('It should return 2 trees', () => {

        const numberOfTrees = location.process(0, 0, 1, 1)
        expect(numberOfTrees).toEqual(2)
      })
      it('It should return 7 trees', () => {
        const numberOfTrees = location.process(0, 0, 1, 3)
        expect(numberOfTrees).toEqual(7)
      })
      it('It should return 3 trees', () => {
        const numberOfTrees = location.process(0, 0, 1, 5)
        expect(numberOfTrees).toEqual(3)
      })
      it('It should return 4 trees', () => {
        const numberOfTrees = location.process(0, 0, 1, 7)
        expect(numberOfTrees).toEqual(4)
      })
      it('It should return 2 trees', () => {
        const numberOfTrees = location.process(0, 0, 2, 1)
        expect(numberOfTrees).toEqual(2)
      })
    })
    describe('Probability product', () => {
      it('It should return 336', () => {
        const arr = [
          [1, 1],
          [1, 3],
          [1, 5],
          [1, 7],
          [2, 1]
        ]
        const product = location.sum(arr)
        expect(product).toEqual(336)
      })
    })
  })
})

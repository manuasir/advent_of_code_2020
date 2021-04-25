

const Loader = require('../../src/day_7/loader.js')
const Luggage = require('../../src/day_7/luggage.js')

describe('Day 7', () => {
  const loader = new Loader()
  const path = './test/day_7/mock.txt'
  const result = loader.load(path)
  const luggage = new Luggage(result)
  describe('Loader', () => {
    it('Number of rows', () => {
      expect(result.length).toEqual(9)
    })
  })
  describe('Luggage module', () => {
    it('Number of occurrences should be 4', () => {
      const result = luggage.getAllBags(`shiny gold`)
      expect(result).toEqual(4)
    })
  })
})

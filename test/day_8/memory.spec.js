

const Memory = require('../../src/day_8/memory.js')
describe('Day 8 - Memory class', () => {
  describe('Instruction module', () => {
    const RAM = new Memory()
    test('Class instance', () => {
      expect(RAM instanceof Memory).toEqual(true)
    })
    test('add single value', () => {
      RAM.add(1)
      expect(RAM.getCell()).toEqual(1)
    })
    test('add array of values', () => {
      RAM.add([1, 2, 3])
      expect(RAM.getCell()).toEqual(3)
    })

  })

})

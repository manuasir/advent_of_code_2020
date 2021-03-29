
const { assert } = require('chai')
const Operation = require('../../src/day_1/op.js')
describe('Day 1', () => {
  describe('Calculate', () => {
    const data = require('./mock.js')
    const op = new Operation(data)
    it('First algorithm', () => {
      const result = op.calculate(2020)
      console.log('RESULT ',result)
      assert.equal(result, 514579)
    })
    it('Second algorithm', () => {
      const result = op.calculate_two(2020)
      console.log('RESULT ',result)
      assert.equal(result, 241861950)
    })
  })
})

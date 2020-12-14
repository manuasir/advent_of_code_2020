
const { assert } = require('chai')
const Operation = require('../../src/day_1/op.js')
describe('Day 1', () => {
  describe('Calculate', () => {
    const data = require('./mock.js')
    const op = new Operation(data)
    it('Sum equal to 20', () => {
      const result = op.calculate()
      console.log('RESULT ',result)
      assert.equal(result, 514579)
    })
  })
})

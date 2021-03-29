
const { assert } = require('chai')
const Validator = require('../../src/day_2/validator.js')
describe('Day 1', () => {
  describe('Validator', () => {
    const data = require('./mock.js')
    const validator = new Validator(data)
    it('Format row', () => {
      const result = validator.format(data[0])
      assert.equal(result.length, 4)
    })
    it('Validate mock: should be valid', () => {
      const result = validator.validate("1-3 a: abcde")
      assert.equal(result, true)
    })
    it('Validate mock: should not be valid', () => {
      const result = validator.validate("1-3 b: cdefg")
      assert.equal(result, false)
    })
    it('Process: should process the mock', () => {
      const result = validator.process()
      assert.equal(result, 2)
    })
    it('Validate mock: should be valid', () => {
      const result = validator.validate_updated("1-3 a: abcde")
      assert.equal(result, true)
    })
    it('Validate mock: should not be valid', () => {
      const result = validator.validate_updated("2-9 c: ccccccccc")
      assert.equal(result, false)
    })
    it('Process: should process the updated mock', () => {
      const result = validator.process_updated()
      assert.equal(result, 1)
    })
  })
})

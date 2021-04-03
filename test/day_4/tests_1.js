
const { assert } = require('chai')
const Loader = require('../../src/day_4/loader.js')
const Validator = require('../../src/day_4/validator.js')

describe('Day 4', () => {
  const loader = new Loader()
  const path = './test/day_4/mock.txt'
  const result = loader.load(path)
  const validator = new Validator(result)
  describe('Loader', () => {
    it('Number of rows', () => {
      assert.equal(result.length, 4)
    })
    describe('Field extractor', () => {
      it('Line 1 should have 7 fields', () => {
        const fields = validator.getFields(result[0])
        assert.equal(fields.length, 8)
      })
      it('0 should be a valid row', () => {
        const fields = validator.getFields(result[0])
        assert.equal(validator.checkFields(fields) , true)
      })
      it('Line 3 should have 7 fields', () => {
        const fields = validator.getFields(result[2])
        assert.equal(fields.length, 7)
      })
      it('1 should be an invalid row', () => {
        const fields = validator.getFields(result[1])
        assert.equal(validator.checkFields(fields) , false)
      })
    })
    describe('Should return 2 valid passports', () => {
      assert.equal(validator.countValidFields(), 2)
    })
  })
})

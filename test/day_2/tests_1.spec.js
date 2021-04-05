

const Validator = require('../../src/day_2/validator.js')
describe('Day 2', () => {
  describe('Validator', () => {
    const data = require('./mock.js')
    const validator = new Validator(data)
    it('Format row', () => {
      const result = validator.format(data[0])
      expect(result.length).toEqual(4)
    })
    it('Validate mock: should be valid', () => {
      const result = validator.validate("1-3 a: abcde")
      expect(result).toEqual(true)
    })
    it('Validate mock: should not be valid', () => {
      const result = validator.validate("1-3 b: cdefg")
      expect(result).toEqual(false)
    })
    it('Process: should process the mock', () => {
      const result = validator.process()
      expect(result).toEqual(2)
    })
    it('Validate mock: should be valid', () => {
      const result = validator.validate_updated("1-3 a: abcde")
      expect(result).toEqual(true)
    })
    it('Validate mock: should not be valid', () => {
      const result = validator.validate_updated("2-9 c: ccccccccc")
      expect(result).toEqual(false)
    })
    it('Process: should process the updated mock', () => {
      const result = validator.process_updated()
      expect(result).toEqual(1)
    })
  })
})

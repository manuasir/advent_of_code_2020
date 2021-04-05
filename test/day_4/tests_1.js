
const { assert } = require('chai')
const Loader = require('../../src/day_4/loader.js')
const Validator = require('../../src/day_4/validator.js')

describe('Day 4', () => {
  const loader = new Loader()
  const path = './test/day_4/mock.txt'
  const rows = loader.load(path)
  const validator = new Validator(rows)
  describe('Loader', () => {
    it('Number of rows', () => {
      assert.equal(rows.length, 12)
    })
    describe('Field extractor', () => {
      it('Line 1 should have 7 fields', () => {
        const fields = validator.getFields(rows[0])
        assert.equal(fields.length, 8)
      })
      it('0 should be a valid row', () => {
        const fields = validator.getFields(rows[0])
        assert.equal(validator.checkFields(fields), true)
      })
      it('Line 3 should have 7 fields', () => {
        const fields = validator.getFields(rows[2])
        assert.equal(fields.length, 7)
      })
      it('1 should be an invalid row', () => {
        const fields = validator.getFields(rows[1])
        assert.equal(validator.checkFields(fields), false)
      })
    })
    describe('Constraints', () => {
      it('[ecl] It should be valid', () => {
        const fields = validator.getRequired()
        const field = fields['ecl']
        const mock = "blu"
        assert.equal(field(mock), true)
      })
      it('[ecl] It should be invalid', () => {
        const fields = validator.getRequired()
        const field = fields['ecl']
        const mock = "pink"
        assert.equal(field(mock), false)
      })
      it('[byr] It should be valid', () => {
        const fields = validator.getRequired()
        const field = fields['byr']
        const mock = 1921
        assert.equal(field(mock), true)
      })
      it('[byr] It should be invalid', () => {
        const fields = validator.getRequired()
        const field = fields['byr']
        const mock = 2003
        assert.equal(field(mock), false)
      })
      it('[iyr] It should be valid', () => {
        const fields = validator.getRequired()
        const field = fields['iyr']
        const mock = 2015
        assert.equal(field(mock), true)
      })
      it('[iyr] It should be invalid', () => {
        const fields = validator.getRequired()
        const field = fields['iyr']
        const mock = 2022
        assert.equal(field(mock), false)
      })
      it('[eyr] It should be valid', () => {
        const fields = validator.getRequired()
        const field = fields['eyr']
        const mock = 2020
        assert.equal(field(mock), true)
      })
      it('[eyr] It should be invalid', () => {
        const fields = validator.getRequired()
        const field = fields['eyr']
        const mock = 2040
        assert.equal(field(mock), false)
      })
      it('[hgt - cm] It should be valid', () => {
        const fields = validator.getRequired()
        const field = fields['hgt']
        const mock = "160cm"
        assert.equal(field(mock), true)
      })
      it('[hgt - cm] It should be invalid', () => {
        const fields = validator.getRequired()
        const field = fields['hgt']
        const mock = "149cm"
        assert.equal(field(mock), false)
      })
      it('[hgt - in] It should be valid', () => {
        const fields = validator.getRequired()
        const field = fields['hgt']
        const mock = "60in"
        assert.equal(field(mock), true)
      })
      it('[hgt - in] It should be invalid', () => {
        const fields = validator.getRequired()
        const field = fields['hgt']
        const mock = "77in"
        assert.equal(field(mock), false)
      })
      it('[hcl] It should be valid', () => {
        const fields = validator.getRequired()
        const field = fields['hcl']
        const mock = "#123456"
        assert.equal(field(mock), true)
      })
      it('[hcl] It should be valid', () => {
        const fields = validator.getRequired()
        const field = fields['hcl']
        const mock = "#aaaaaa"
        assert.equal(field(mock), true)
      })
      it('[hcl] It should be invalid', () => {
        const fields = validator.getRequired()
        const field = fields['hcl']
        const mock = "#111"
        assert.equal(field(mock), false)
      })
      it('[hcl] It should be invalid #zzz', () => {
        const fields = validator.getRequired()
        const field = fields['hcl']
        const mock = "#zzzzzz"
        assert.equal(field(mock), false)
      })
      it('[hcl] It should be invalid #9999999', () => {
        const fields = validator.getRequired()
        const field = fields['hcl']
        const mock = "#9999999"
        assert.equal(field(mock), false)
      })
      it('[hcl] It should be invalid #abcdek', () => {
        const fields = validator.getRequired()
        const field = fields['hcl']
        const mock = "#abcdek"
        assert.equal(field(mock), false)
      })
      it('[pid] It should be valid', () => {
        const fields = validator.getRequired()
        const field = fields['pid']
        const mock = "000011119"
        assert.equal(field(mock), true)
      })
      it('[pid] It should be invalid', () => {
        const fields = validator.getRequired()
        const field = fields['pid']
        const mock = "9999999999"
        assert.equal(field(mock), false)
      })
    })
    describe('Valid values', () => {
      it('Values of first row should be valid', () => {
        assert.equal(validator.checkValues(rows[0]), true)
      })
      it('Values of second row should be invalid', () => {
        assert.equal(validator.checkValues(rows[4]), false)
      })
      it('Values of second row should be invalid', () => {
        assert.equal(validator.checkValues(rows[5]), false)
      })
      it('Values of second row should be invalid', () => {
        assert.equal(validator.checkValues(rows[6]), false)
      })
    })
    describe('Valid values', () => {
      it('Values of row should be valid', () => {
        assert.equal(validator.checkValues(rows[8]), true)
      })
      it('Values of row should be valid', () => {
        assert.equal(validator.checkValues(rows[9]), true)
      })
      it('Values of row should be valid', () => {
        assert.equal(validator.checkValues(rows[10]), true)
      })
      it('Values of row should be valid', () => {
        assert.equal(validator.checkValues(rows[11]), true)
      })
    })
  })
})



const Loader = require('../../src/day_4/loader.js')
const Validator = require('../../src/day_4/validator.js')

describe('Day 4', () => {
  const loader = new Loader()
  const path = './test/day_4/mock.txt'
  const rows = loader.load(path)
  const validator = new Validator(rows)
  describe('Loader', () => {
    it('Number of rows', () => {
      expect(rows.length).toEqual(12)
    })
    describe('Field extractor', () => {
      it('Line 1 should have 7 fields', () => {
        const fields = validator.getFields(rows[0])
        expect(fields.length).toEqual(8)
      })
      it('0 should be a valid row', () => {
        const fields = validator.getFields(rows[0])
        expect(validator.checkFields(fields)).toEqual(true)
      })
      it('Line 3 should have 7 fields', () => {
        const fields = validator.getFields(rows[2])
        expect(fields.length).toEqual(7)
      })
      it('1 should be an invalid row', () => {
        const fields = validator.getFields(rows[1])
        expect(validator.checkFields(fields)).toEqual(false)
      })
    })
    describe('Constraints', () => {
      it('[ecl] It should be valid', () => {
        const fields = validator.getRequired()
        const field = fields['ecl']
        const mock = "blu"
        expect(field(mock)).toEqual(true)
      })
      it('[ecl] It should be invalid', () => {
        const fields = validator.getRequired()
        const field = fields['ecl']
        const mock = "pink"
        expect(field(mock)).toEqual(false)
      })
      it('[byr] It should be valid', () => {
        const fields = validator.getRequired()
        const field = fields['byr']
        const mock = 1921
        expect(field(mock)).toEqual(true)
      })
      it('[byr] It should be invalid', () => {
        const fields = validator.getRequired()
        const field = fields['byr']
        const mock = 2003
        expect(field(mock)).toEqual(false)
      })
      it('[iyr] It should be valid', () => {
        const fields = validator.getRequired()
        const field = fields['iyr']
        const mock = 2015
        expect(field(mock)).toEqual(true)
      })
      it('[iyr] It should be invalid', () => {
        const fields = validator.getRequired()
        const field = fields['iyr']
        const mock = 2022
        expect(field(mock)).toEqual(false)
      })
      it('[eyr] It should be valid', () => {
        const fields = validator.getRequired()
        const field = fields['eyr']
        const mock = 2020
        expect(field(mock)).toEqual(true)
      })
      it('[eyr] It should be invalid', () => {
        const fields = validator.getRequired()
        const field = fields['eyr']
        const mock = 2040
        expect(field(mock)).toEqual(false)
      })
      it('[hgt - cm] It should be valid', () => {
        const fields = validator.getRequired()
        const field = fields['hgt']
        const mock = "160cm"
        expect(field(mock)).toEqual(true)
      })
      it('[hgt - cm] It should be invalid', () => {
        const fields = validator.getRequired()
        const field = fields['hgt']
        const mock = "149cm"
        expect(field(mock)).toEqual(false)
      })
      it('[hgt - in] It should be valid', () => {
        const fields = validator.getRequired()
        const field = fields['hgt']
        const mock = "60in"
        expect(field(mock)).toEqual(true)
      })
      it('[hgt - in] It should be invalid', () => {
        const fields = validator.getRequired()
        const field = fields['hgt']
        const mock = "77in"
        expect(field(mock)).toEqual(false)
      })
      it('[hcl] It should be valid', () => {
        const fields = validator.getRequired()
        const field = fields['hcl']
        const mock = "#123456"
        expect(field(mock)).toEqual(true)
      })
      it('[hcl] It should be valid', () => {
        const fields = validator.getRequired()
        const field = fields['hcl']
        const mock = "#aaaaaa"
        expect(field(mock)).toEqual(true)
      })
      it('[hcl] It should be invalid', () => {
        const fields = validator.getRequired()
        const field = fields['hcl']
        const mock = "#111"
        expect(field(mock)).toEqual(false)
      })
      it('[hcl] It should be invalid #zzz', () => {
        const fields = validator.getRequired()
        const field = fields['hcl']
        const mock = "#zzzzzz"
        expect(field(mock)).toEqual(false)
      })
      it('[hcl] It should be invalid #9999999', () => {
        const fields = validator.getRequired()
        const field = fields['hcl']
        const mock = "#9999999"
        expect(field(mock)).toEqual(false)
      })
      it('[hcl] It should be invalid #abcdek', () => {
        const fields = validator.getRequired()
        const field = fields['hcl']
        const mock = "#abcdek"
        expect(field(mock)).toEqual(false)
      })
      it('[pid] It should be valid', () => {
        const fields = validator.getRequired()
        const field = fields['pid']
        const mock = "000011119"
        expect(field(mock)).toEqual(true)
      })
      it('[pid] It should be invalid', () => {
        const fields = validator.getRequired()
        const field = fields['pid']
        const mock = "9999999999"
        expect(field(mock)).toEqual(false)
      })
    })
    describe('Valid values', () => {
      it('Values of first row should be valid', () => {
        expect(validator.checkValues(rows[0])).toEqual(true)
      })
      it('Values of second row should be invalid', () => {
        expect(validator.checkValues(rows[4])).toEqual(false)
      })
      it('Values of second row should be invalid', () => {
        expect(validator.checkValues(rows[5])).toEqual(false)
      })
      it('Values of second row should be invalid', () => {
        expect(validator.checkValues(rows[6])).toEqual(false)
      })
    })
    describe('Valid values', () => {
      it('Values of row should be valid', () => {
        expect(validator.checkValues(rows[8])).toEqual(true)
      })
      it('Values of row should be valid', () => {
        expect(validator.checkValues(rows[9])).toEqual(true)
      })
      it('Values of row should be valid', () => {
        expect(validator.checkValues(rows[10])).toEqual(true)
      })
      it('Values of row should be valid', () => {
        expect(validator.checkValues(rows[11])).toEqual(true)
      })
    })
  })
})

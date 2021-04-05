
class Validator {
  constructor(data) {
    this.rows = data
    this.required = {
      'ecl': (value) => { return value === 'amb' || value === 'blu' || value === 'brn' || value === 'gry' || value === 'grn' || value === 'hzl' || value === 'oth' },
      'pid': (value) => { return /^\d{9}$/.test(value) },
      'eyr': (value) => { return Number(value) >= 2020 && Number(value) <= 2030 },
      'hcl': (value) => { return /^#[0-9a-f]{6}$/.test(value) },
      'byr': (value) => { return Number(value) >= 1920 && Number(value) <= 2002 },
      'iyr': (value) => { return Number(value) >= 2010 && Number(value) <= 2020 },
      'hgt': (value) => { return value.includes('cm') ? Number(value.split('cm')[0]) >= 150 && Number(value.split('cm')[0]) <= 193 : value.includes('in') ? Number(value.split('in')[0]) >= 59 && Number(value.split('in')[0]) <= 76 : false }
    }
    this.optional = [
      'cid'
    ]
  }

  getRequired() {
    return this.required
  }

  getFields(row) {
    try {
      return row.split(' ').map(item => item.split(':')[0])
    } catch (error) {
      console.error(error.message || error)
    }
  }

  checkFields(fields) {
    const diff = Object.keys(this.required).filter(value => !fields.includes(value))
    return Array.isArray(diff) && (diff.length === 0 || (diff.length === 1 && this.optional.includes(diff[0])))
  }

  checkValues(row) {
    const values = row.split(' ')
    return values.map((item) => {
      const key = item.split(':')[0]
      const value = item.split(':')[1]
      const res = key !== 'cid' ?
        this.required[key](value) :
        true
      return res
    }).reduce((a, b) => { return a && b })
  }

  countValidFields() {
    return this.rows.map((row) => {
      return this.checkFields(this.getFields(row)) && this.checkValues(row)
    }).filter(item => item === true).length
  }

}

module.exports = Validator
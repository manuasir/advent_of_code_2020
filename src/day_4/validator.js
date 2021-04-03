
class Validator {
  constructor(data) {
    this.fields = data
    this.required = {
      'ecl': (value) => { return value < 1900 && value > 2020 },
      'pid': (value) => { return value.length === 9 && value.filter(char => !isNaN(char)).length === 9 },
      'eyr': (value) => { return value >= 2020 && value <= 2030 },
      'hcl': (value) => { return /^#[0-9]?[a-f]/.test(value) },
      'byr': (value) => { return value >= 1920 && value <= 2002 },
      'iyr': (value) => { return value >= 2010 && value <= 2020 },
      'hgt': (value) => { return value.includes('cm') ? Number(value.split('cm')[0]) >= 150 && Number(value.split('cm')[0]) <= 193 : value.includes('in')[0] ? Number(value.split('in')[0]) >= 59 && Number(value.split('in')[0]) <= 76 : false }
    }
    this.optional = [
      'cid'
    ]
  }

  getRequired(){
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

  checkValidity(fields) {
    const diff = Object.keys(this.required).filter(value => !fields.includes(value))
    return Array.isArray(diff) && (diff.length === 0 || (diff.length === 1 && this.optional.includes(diff[0])))
  }

  countValidFields() {
    return this.fields.map((row) => {
      return this.checkFields(this.getFields(row))
    }).filter(item => item === true).length
  }

}

module.exports = Validator
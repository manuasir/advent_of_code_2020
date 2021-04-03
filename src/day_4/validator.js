
class Validator {
  constructor(data) {
    this.fields = data
    this.required = [
      'ecl',
      'pid',
      'eyr',
      'hcl',
      'byr',
      'iyr',
      'hgt'
    ]
  }

  getFields(row) {
    try {
      return row.split(' ').map(item => item.split(':')[0])
    } catch (error) {
      console.error(error.message || error)
    }
  }

  checkFields(fields) {
    const diff = this.required.filter(value => !fields.includes(value))
    return Array.isArray(diff) && (diff.length === 0 || (diff.length === 1 && diff[0] === 'cid'))
  }

  countValidFields() {
    // this.data.map(row => this.checkFields(this.getFields(row)).filter(item => item === true))
    return this.fields.map((row) => {
      return this.checkFields(this.getFields(row))
    }).filter(item => item === true).length
  }

}

module.exports = Validator
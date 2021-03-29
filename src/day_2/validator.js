
class Validator {
  constructor(data) {
    this.data = data
  }

  format(row) {
    const arr = []
    arr.push(row.split(' ')[0].split('-')[0]) //min
    arr.push(row.split(' ')[0].split('-')[1]) //max
    arr.push(row.split(' ')[1].split(':')[0]) //char
    arr.push(row.split(' ')[2]) //str
    return arr
  }

  validate(row) {
    const formattedRow = this.format(row)
    let repeat = 0
    for (let i = 0; i < formattedRow[3].length; i++) {
      if (repeat > Number(formattedRow[1])) {
        return false
      }
      if (formattedRow[3][i] === formattedRow[2]) {
        repeat++
      }
    }
    return repeat >= formattedRow[0] && repeat <= formattedRow[1] ? true : false
  }

  validate_updated(row) {
    const formattedRow = this.format(row)
    if (formattedRow[3].length < Number(formattedRow[0]) + 1 || formattedRow[3].length < Number(formattedRow[1])) {
      return false
    }
    return (formattedRow[3][Number(formattedRow[0]) - 1] === formattedRow[2] && formattedRow[3][Number(formattedRow[1]) - 1] !== formattedRow[2]) ||
      (formattedRow[3][Number(formattedRow[1]) - 1] === formattedRow[2] && formattedRow[3][Number(formattedRow[0]) - 1] !== formattedRow[2])
  }


  process() {
    try {
      return this.data.filter(row => this.validate(row)).length
    } catch (error) {
      console.error('Cannot process string: ', error.message || error)
    }
  }

  process_updated() {
    try {
      return this.data.filter(row => this.validate_updated(row)).length
    } catch (error) {
      console.error('Cannot process string: ', error.message || error)
    }
  }

}

module.exports = Validator
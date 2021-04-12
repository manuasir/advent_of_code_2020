
class Questions {
  constructor(data) {
    this.data = data
  }

  getUnique(str) {
    return String.prototype.concat(...new Set(str))
  }

  concatAnswers(rows) {
    return this.getUnique(rows.join(''))
  }

  countAnswersFromGroup(rows) {
    return this.concatAnswers(rows.split(' ')).length
  }

  countAllAnswers() {
    return this.data.map(rows => this.countAnswersFromGroup(rows)).reduce((a, b) => { return a + b })
  }

  buildRow(row) {
    return row.split(' ')
  }

  intersect(a, b) {
    return [...a].filter((item) => {
      return b.includes(item)
    })
  }

  getInsersections(str) {
    const arr = this.buildRow(str)
    if (arr.length === 1) {
      return arr[0].length
    }
    return arr.reduce((a, b) => {
      return this.intersect(a, b)
    }).length
  }

  getAllIntersections() {
    let cont = 0
    this.data.map((row) => {
      cont += this.getInsersections(row)
    })
    return cont
  }

}

module.exports = Questions

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

}

module.exports = Questions
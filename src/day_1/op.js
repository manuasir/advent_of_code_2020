
class Pair {
  constructor(data) {
    this.data = data
  }

  calculate() {
    try {
      for (let i = 0; i < this.data.length; i++) {
        for (let j = 0; j < this.data.length; j++) {
          const intI = Number(this.data[i])
          const intJ = Number(this.data[j])
          if (intI + intJ === 2020) {
            return intI * intJ
          }
        }
      }
    } catch (error) {
      console.error('Error while calculating; ', error.message || error)
    }
  }

}

module.exports = Pair
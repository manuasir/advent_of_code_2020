
class Pair {
  constructor(data) {
    this.data = data
  }

  calculate(selector) {
    try {
      for (let i = 0; i < this.data.length; i++) {
        const intI = Number(this.data[i])
        if (this.data.includes(selector - intI)) {
          return intI * (selector - intI)
        }
      }
    } catch (error) {
      console.error('Error while calculating; ', error.message || error)
    }
  }

  calculate_two(selector) {
    try {
      for (let i = 0; i < this.data.length; i++) {
        for (let j = 0; j < this.data.length; j++) {
          const intJ = Number(this.data[j])
          const intI = Number(this.data[i])
          if (this.data.includes(selector - intI - intJ)) {
            return intI * intJ * (selector - intI - intJ)
          }
        }
      }
    } catch (error) {
      console.error('Error while calculating; ', error.message || error)
    }
  }
}

module.exports = Pair
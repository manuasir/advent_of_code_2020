
class Location {
  /**
   * Class constructor
   * @param {Array<Array>} data
   */
  constructor(data) {
    this.data = data
  }

  process(i = 0, j = 0, down, right) {
    let sum = 0
    if (i >= this.data.length) { return 0 }
    if (this.data[i][j] === '#') { sum++ }
    sum += this.process(i + down, (j + right) % this.data[0].length, down, right)
    return sum
  }


  sum(arr) {
    let prod = 1
    for (let i = 0; i < arr.length; i++) {
      prod *= this.process(0, 0, arr[i][0], arr[i][1])
    }
    return prod
  }
}

module.exports = Location
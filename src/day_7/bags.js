

class Bags {
  /**
   * Class constructor
   * @param {Array<Array>} data
   */
  constructor(data) {
    this.rawData = data
    this.data = []
  }

  load() {
    this.rawData.forEach(bag => {
      this.data.push(new Bag(bag))
    })
  }
}

module.exports = Bags
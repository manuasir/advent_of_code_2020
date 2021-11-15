

class Bags {
  /**
   * Class constructor
   * @param {Array<Array>} data
   */
  constructor(bagClass, data) {
    this.Bag = bagClass
    this.rawData = data
    this.data = []
  }

  load() {
    this.rawData.forEach(bag => {
      this.data.push(new this.Bag(bag))
    })
  }

  total() {
    return this.data.length
  }

  getBagByType(type) {
    return this.data.filter(data => data.getType() === type)[0]
  }

  sumQuantities(type) {
    const currentBag = this.getBagByType(type)
    let acc = 0
    if (currentBag.getBags().length === 0) return acc
    currentBag.getBags().forEach(bag => {
      acc += Number(bag[0])
      acc += this.sumQuantities(bag[1]) * Number(bag[0])
    })
    return acc
  }
}

module.exports = Bags
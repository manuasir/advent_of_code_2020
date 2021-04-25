
class Luggage {
  /**
   * Class constructor
   * @param {Array<Array>} data
   */
  constructor(data) {
    this.data = data
  }

  getType(row) {
    return `${row.split(' ')[0]} ${row.split(' ')[1]}`
  }

  getDirectBags(selector){
    const regEx = `\\d\\s${selector.split(' ')[0]}\\s${selector.split(' ')[1]}`
    const regExp = new RegExp(regEx)
    return this.data.filter(item => regExp.test(item))
  }

  getAllBags(selector, acc = []) {
    const directArray = this.getDirectBags(selector)
    if (directArray.length === 0) {
      return 0
    }
    const directArraySet = directArray.filter(item => item)
    for (let i = 0; i < directArraySet.length; i++) {
      if (directArraySet[i] && !acc.includes(this.getType(directArraySet[i]))) {
          acc.push(this.getType(directArraySet[i]))
          this.getAllBags(this.getType(directArraySet[i]), acc)
      }
    }
    return acc.length
  }



}

module.exports = Luggage
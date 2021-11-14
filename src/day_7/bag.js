class Bag {
  constructor(specs) {
    this.validate(specs)
    this.specs = specs
    this.splittedValues = []
  }

  /**
   * Validates input format
   * @param {String} specs
   * @returns 
   */
  validate(specs) {
    if (!specs.includes('bags contain')) {
      throw new Error('Incorrect format.')
    }
    return
  }

  parseData() {
    const r = /^(\w+\s\w+)\sbags\scontain\s(\d)\s(\w+\s\w+)\s(bags?)(\.?\,?\s?\s?(\d?)\s?(\w+?\s?\w+?)?\s?(bags?))?\,?(\s?\s?(\d?)\s?(\w+?\s?\w+?)?\s?(bags?))?\,?(\s?\s?(\d?)\s?(\w+?\s?\w+?)?\s?(bags?))?\.$/
    const regEx = new RegExp(r)
    const tmp = this.specs.match(regEx)
    const data = tmp.filter((item, index) => item !== 'bags' && item !== 'bag' && item !== '' && !!item && !item.startsWith(',') && !item.startsWith(' '))
    const bags = []
    let temp = []
    for (let i = 2; i < data.length; i += 2) {
      if (data[i] === '') {
        break
      }
      temp.push(data[i])
      temp.push(data[i + 1])
      bags.push(temp)
      temp = []
    }

    return {
      type: data[1],
      bags: bags
    }
  }

  /**
   * Gets the bag in JSON format
   * @returns {Object}
   */
  format() {
    return {
      [this.specs.type]: this.specs.contain
    }
  }

  getType() {
    return this.data.map(bag => bag.specs.type)
  }
}

module.exports = Bag

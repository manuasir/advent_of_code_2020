class Bag {
  constructor(specs) {
    this.validate(specs)
    this.specs = specs
    this.props = this.parseData()
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
    if (this.specs.includes('no other bags.')) {
      const splitted = this.specs.split(' ')
      return {
        type: `${splitted[0]} ${splitted[1]}`,
        bags: []
      }
    }
    const r = /^(\w+\s\w+)\sbags\scontain\s(\d)\s(\w+\s\w+)\s(bags?)(\.?\,?\s?\s?(\d?)\s?(\w+?\s?\w+?)?\s?(bags?))?\,?(\s?\s?(\d?)\s?(\w+?\s?\w+?)?\s?(bags?))?\,?(\s?\s?(\d?)\s?(\w+?\s?\w+?)?\s?(bags?))?\.$/
    const regEx = new RegExp(r)
    const tmp = this.specs.match(regEx)
    if (!tmp) {
      throw new Error('Cannot parse data.')
    }
    const data = tmp.filter((item, index) => item !== 'bags' && item !== 'bag' && item !== '' && !!item && !item.startsWith(',') && !item.startsWith(' '))
    const bags = []
    let temp = []
    for (let i = 2; i < data.length; i += 2) {
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

  getBags() {
    return this.props.bags
  }

  getType() {
    return this.props.type
  }
}

module.exports = Bag

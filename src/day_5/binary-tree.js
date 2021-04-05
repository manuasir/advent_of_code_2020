

class BinaryTree {
  constructor() { }

  getRow(label, range, index) {
    const position = label[0]
    if (index === 6) {
      return position === 'F' ? Number(range.split('-')[0]) : Number(range.split('-')[1])
    }
    const left = label.slice(1, label.length)
    let firstRange = ""
    let secondRange = ""
    if (position === 'F') {
      firstRange = range.split('-')[0]
      secondRange = Math.floor((Number(range.split('-')[1]) + Number(firstRange)) / 2)
      const nextRange = `${firstRange}-${secondRange}`
      index += 1
      return this.getRow(left, nextRange, index)
    } else if (position === 'B') {
      firstRange = Math.ceil((Number(range.split('-')[1]) + Number(range.split('-')[0])) / 2)
      secondRange = range.split('-')[1]
      const nextRange = `${firstRange}-${secondRange}`
      index += 1
      return this.getRow(left, nextRange, index)
    }
  }


}

module.exports = BinaryTree
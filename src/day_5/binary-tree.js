

class BinaryTree {
  constructor() { }

  getRow(label, range, index) {
    const position = label[index]
    if (index === 6) {
      return position === 'F' ? Number(range.split('-')[0]) : Number(range.split('-')[1])
    }
    if (position === 'F') {
      return this.getRow(label, `${range.split('-')[0]}-${Math.floor((Number(range.split('-')[1]) + Number(range.split('-')[0])) / 2)}`, index+=1)
    } else if (position === 'B') {
      return this.getRow(label, `${Math.ceil((Number(range.split('-')[1]) + Number(range.split('-')[0])) / 2)}-${range.split('-')[1]}`, index+=1)
    }
  }

  getColumn(label, range, index) {
    const position = label[7 + index]
    if (index === 3) {
      return position === 'L' ? Number(range.split('-')[0]) : Number(range.split('-')[1])
    }
    if (position === 'L') {
      const nextRange = `${range.split('-')[0]}-${Math.floor((Number(range.split('-')[1]) + Number(range.split('-')[0])) / 2)}`
      return this.getColumn(label, nextRange, index+=1)
    } else if (position === 'R') {
      const nextRange = `${Math.ceil((Number(range.split('-')[1]) + Number(range.split('-')[0])) / 2)}-${range.split('-')[1]}`
      return this.getColumn(label, nextRange, index+=1)
    }
  }
}

module.exports = BinaryTree
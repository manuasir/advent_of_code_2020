class MemoryController {
  constructor() {
    this.cells = []
  }

  erase(){
    this.cells = []
  }

  getCell(index = this.cells.length - 1) {
    return this.cells[index]
  }

  add(cells) {
    // if cells is array, add each cell
    if (Array.isArray(cells)) {
      cells.forEach(cell => this.add(cell))
      return
    }
    this.cells.push(cells)

  }
}

module.exports = MemoryController
const Instruction = require('./instruction')

class Processor {
  constructor(memory) {
    this.memory = memory
    this.instructionRegister = ""
    this.programmeCounter = 0
    this.history = {}
    this.accumulator = 0
  }

  exit() {
    return !!this.history[this.programmeCounter]
  }

  clock() {
    this.history[this.programmeCounter] = true
    this.fetch()
    const instruction = this.decode()
    this.process(instruction)
  }

  decode() {
    if (!this.instructionRegister || this.instructionRegister.length === 0) {
      throw new Error('Instruction register is empty')
    }
    if (this.programmeCounter.visited) {
      throw new Error('Programme counter has already been visited')
    }
    return new Instruction(this.instructionRegister)
  }

  changeMemory(memory) {
    this.accumulator = 0
    this.instructionRegister = ""
    this.programmeCounter = 0
    this.history = {}
    this.memory = memory
  }

  fetch() {
    this.instructionRegister = this.memory.getCell(this.programmeCounter)
  }

  operate(sign, a, b) {
    if (sign === '+') {
      return a + b
    } else if (sign === '-') {
      return a - b
    }
  }

  process(instruction) {
    const params = instruction.parameters
    switch (instruction.opcode) {
      case 'acc':
        this.accumulator = this.operate(params.sign, this.accumulator, params.amount)
        this.programmeCounter++
        break
      case 'jmp':
        this.programmeCounter = this.operate(params.sign, this.programmeCounter, params.amount)
        break
      case 'nop':
        this.programmeCounter++
        break
      default:
        throw new Error(`Unknown opcode: ${opcode}`)
    }
  }

  run() {
    while (!this.exit()) {
      this.clock()
    }
    return this.accumulator
  }

}

module.exports = Processor
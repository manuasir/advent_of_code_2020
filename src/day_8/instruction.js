class Instruction {
  constructor(instruction) {
    this._opcode = instruction.split(' ')[0]
    this._parameters = {
      sign: instruction.split(' ')[1].split('')[0],
      amount: parseInt(instruction.split(' ')[1].substring(1))
    }
  }

  get opcode() {
    return this._opcode
  }

  get parameters() {
    return this._parameters
  }

  toJson(){
    return {
      opcode: this.opcode,
      parameters: this.parameters
    }
  }

}

module.exports = Instruction
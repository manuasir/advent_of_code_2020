

const Loader = require('../../src/utils/loader.js')
const Instruction = require('../../src/day_8/instruction.js')
describe('Day 8 - Instruction', () => {
  const loader = new Loader()
  const path = './test/day_8/mock.txt'
  const result = loader.load(path)
  describe('Loader', () => {
    it('Number of rows', () => {
      expect(result.length).toEqual(9)
    })
  })
  describe('Instruction module', () => {
    test('Instruction creation acc', () => {
      const instruction = new Instruction('acc +1')
      expect(instruction.opcode).toEqual('acc')
      expect(instruction.parameters.sign).toEqual('+')
      expect(instruction.parameters.amount).toEqual(1)
    })
    test('Instruction creation nop', () => {
      const instruction = new Instruction('nop +0')
      expect(instruction.opcode).toEqual('nop')
      expect(instruction.parameters.sign).toEqual('+')
      expect(instruction.parameters.amount).toEqual(0)
    })
    test('Instruction creation jmp', () => {
      const instruction = new Instruction('jmp -99')
      expect(instruction.opcode).toEqual('jmp')
      expect(instruction.parameters.sign).toEqual('-')
      expect(instruction.parameters.amount).toEqual(99)
    })
    test('Instruction creation jmp', () => {
      const instruction = new Instruction('jmp -99')
      expect(instruction.opcode).toEqual('jmp')
      expect(instruction.parameters.sign).toEqual('-')
      expect(instruction.parameters.amount).toEqual(99)
    })
    test('Instruction creation jmp to json', () => {
      const instruction = new Instruction('jmp -99')
      expect(instruction.toJson()).toMatchObject({
        opcode: 'jmp',
        parameters: {
          sign: '-',
          amount: 99
        }
      })
    })
  })

})

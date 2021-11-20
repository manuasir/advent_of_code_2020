

const Processor = require('../../src/day_8/processor.js')
const Memory = require('../../src/day_8/memory.js')
const FileLoader = require('../../src/utils/loader')


describe('Day 8 - Processor class', () => {
  const ram = new Memory()
  const loader = new FileLoader()
  const instructions = loader.load('./test/day_8/mock.txt')
  expect(instructions.length).toEqual(9)
  ram.add(instructions)

  describe('Instruction module', () => {
    const CPU = new Processor(ram)

    test('Class instance', () => {
      expect(CPU instanceof Processor).toEqual(true)
    })

    test('Process sample', () => {
      expect(CPU.run()).toEqual(5)
    })

    test('Process instructions', () => {
      ram.erase()
      const instructions = loader.load('./test/day_8/mock_2.txt')
      ram.add(instructions)
      CPU.changeMemory(ram)
      expect(CPU.run()).toEqual(10)
    })

    test('Process instructions', () => {
      ram.erase()
      const instructions = loader.load('./test/day_8/instructions.txt')
      ram.add(instructions)
      CPU.changeMemory(ram)
      expect(CPU.run()).toEqual(2003)
    })
  })

})

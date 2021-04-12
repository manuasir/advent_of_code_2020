

const Loader = require('../../src/day_6/loader.js')
const Questions = require('../../src/day_6/questions.js')

describe('Day 6', () => {
  const loader = new Loader()
  const path = './test/day_6/mock.txt'
  const rows = loader.load(path)
  const questions = new Questions(rows)
  describe('Loader', () => {
    it('Number of rows', () => {
      expect(rows.length).toEqual(6)
    })
  })
  describe('Unique strings', () => {
    it('Should return abc', () => {
      const mock = 'abcabc'
      expect(questions.getUnique(mock)).toEqual('abc')
    })
    it('Should return abc', () => {
      const mock = 'abc'
      expect(questions.getUnique(mock)).toEqual('abc')
    })
    it('Should return abc', () => {
      expect(questions.concatAnswers(rows[0].split(' '))).toEqual('abc')
    })
    it('Should return abc', () => {
      expect(questions.concatAnswers(rows[1].split(' '))).toEqual('abc')
    })
    it('Should return abc', () => {
      expect(questions.concatAnswers(rows[2].split(' '))).toEqual('abc')
    })
    it('Should return a', () => {
      expect(questions.concatAnswers(rows[3].split(' '))).toEqual('a')
    })
    it('Should return b', () => {
      expect(questions.concatAnswers(rows[4].split(' '))).toEqual('b')
    })
  })
  describe('Count answers', () => {
    it('Should return 1', () => {
      expect(questions.countAnswersFromGroup(rows[3])).toEqual(1)
    })
    it('Should return 14', () => {
      expect(questions.countAllAnswers()).toEqual(14)
    })
  })
  describe('Intersections', () => {
    it('Should return 1', () => {
      expect(questions.getInsersections(rows[0])).toEqual(3)
    })
    it('Should return a', () => {
      expect(questions.intersect('ab','ac')).toEqual(['a'])
    })
    it('Should return a', () => {
      expect(questions.getInsersections(rows[2])).toEqual(1)
    })
    it('Should return empty array', () => {
      expect(questions.getInsersections(rows[1])).toEqual(0)
    })
    it('Should return [a] array', () => {
      expect(questions.getInsersections(rows[3])).toEqual(1)
    })
    it('Should return 1', () => {
      expect(questions.getInsersections(rows[4])).toEqual(1)
    })
    it('Should return [a,g]', () => {
      expect(questions.getInsersections(rows[5])).toEqual(2)
    })
    it('Get all intersections', () => {
      expect(questions.getAllIntersections()).toEqual(8)
    })
  })
})

/* globals describe it */

const expect = require('chai').expect
const kata = require('../josephus_kata.js')

describe('Josephus kata', function () {
  describe('Init testing', function () {
    it('Test function should be running', function () {
      expect(kata.test()).to.equal('Test function running')
    })
  })
  describe('My tests', function () {
    it('Should return an instance of Array', function () {
      expect(kata.josephus([1, 2, 3, 4, 5, 6, 7], 3)).to.instanceOf(Array)
    })
    it('Return an empty array when provided an empty array', function () {
      expect(kata.josephus([], 3)).to.eql([])
    })
  })
  describe('Code wars tests', function () {
    it('return permuted array of [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]', function () {
      expect(kata.josephus([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 1)).to.eql([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
    })
    it('return permuted array of [2, 4, 6, 8, 10, 3, 7, 1, 9, 5]', function () {
      expect(kata.josephus([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2)).to.eql([2, 4, 6, 8, 10, 3, 7, 1, 9, 5])
    })
    it("return permuted array of ['e', 's', 'W', 'o', 'C', 'd', 'r', 'a']", function () {
      expect(kata.josephus(['C', 'o', 'd', 'e', 'W', 'a', 'r', 's'], 4)).to.eql(['e', 's', 'W', 'o', 'C', 'd', 'r', 'a'])
    })
    it('return permuted array of [3, 6, 2, 7, 5, 1, 4]', function () {
      expect(kata.josephus([1, 2, 3, 4, 5, 6, 7], 3)).to.eql([3, 6, 2, 7, 5, 1, 4])
    })
    it('Return an empty array', function () {
      expect(kata.josephus([], 3)).to.eql([])
    })
  })
})

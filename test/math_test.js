/* globals describe it */

const expect = require('chai').expect
const kata = require('../math_kata.js')

describe('Math kata', function () {
  describe('Init testing', function () {
    it('Test function should be running', function () {
      expect(kata.test()).to.equal('test running')
    })
  })

  describe('My tests', function () {
    describe('Round function', function () {
      it('should return a round number lesser than 0.5', function () {
        expect(kata.round(3.17)).to.equal(3)
      })
      it('should return a round number greater than 0.5', function () {
        expect(kata.round(3.9)).to.equal(4)
      })
      it('should return a 0', function () {
        expect(kata.round(0)).to.equal(0)
      })
    })
    describe('Floor function', function () {
      it('should return the lowest round number', function () {
        expect(kata.floor(4.5)).to.equal(4)
      })
      it('should return the lowest round number', function () {
        expect(kata.floor(4.00000001)).to.equal(4)
      })
      it('should return a 0', function () {
        expect(kata.floor(0)).to.equal(0)
      })
    })
    describe('Floor function', function () {
      it('should return the highest round number', function () {
        expect(kata.ceil(4.5)).to.equal(5)
      })
      it('should return the highest round number', function () {
        expect(kata.ceil(4.00000001)).to.equal(5)
      })
      it('should return a 0', function () {
        expect(kata.ceil(0)).to.equal(0)
      })
    })
  })
})

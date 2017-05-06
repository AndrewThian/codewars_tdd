/* globals describe it */

const expect = require('chai').expect
const kata = require('../createPhoneNumber_kata.js')

let exportTest = kata.test()

describe('Phone Number Kata', function () {
  describe('Init testing', function () {
    it('Test function should be running', function () {
      expect(exportTest).to.equal('Test function running')
    })
  })

  describe('My tests', function () {
    it('should return -1 if input is not an array', function () {
      expect(kata.createPhoneNumber('testing')).to.equal(-1)
    })
    it('it should return a string', function () {
      // test for return value as a string
      expect(kata.createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])).to.be.a('string')
    })
    it('should return phone number (123) 456-7890', function () {
      expect(kata.createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])).to.equal('(123) 456-7890')
    })
    it('should set undefined numbers to 0', function () {
      expect(kata.createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8])).to.equal('(123) 456-7800')
      expect(kata.createPhoneNumber([1, 2, 3, 4, 5, 6, 7])).to.equal('(123) 456-7000')
      expect(kata.createPhoneNumber([1, 2, 3, 4, 5, 6])).to.equal('(123) 456-0000')
    })
  })
})

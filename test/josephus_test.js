/* globals describe it */

const expect = require('chai').expect
const kata = require('../josephus_kata.js')

describe('Domain kata', function () {
  describe('Init testing', function () {
    it('Test function should be running', function () {
      expect(kata.test()).to.equal('Test function running')
    })
  })
  describe('Code wars tests', function () {

  })
})

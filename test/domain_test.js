/* globals describe it */

const expect = require('chai').expect
const kata = require('../domain_kata.js')

let exportTest = kata.test()

describe('Domain kata', function () {
  describe('Init testing', function () {
    it('Test function should be running', function () {
      expect(exportTest).to.equal('Test function running')
    })
  })
  describe('Code wars tests', function () {
    it('should return domain name from url', function () {
      expect(kata.domainName('http://google.com')).to.equal('google')
    })
    it('should return domain name from url', function () {
      expect(kata.domainName('http://google.co.jp')).to.equal('google')
    })
    it('should return domain name from url', function () {
      expect(kata.domainName('www.xakep.ru')).to.equal('xakep')
    })
    it('should return domain name from url', function () {
      expect(kata.domainName('https://youtube.com')).to.equal('youtube')
    })
  })
})

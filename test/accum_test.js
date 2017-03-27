/* globals describe it */

const expect = require('chai').expect
const kata = require('../accum_kata.js')

let exportTest = kata.test()

describe('Accum kata', function () {
  describe('Init testing', function () {
    it('Test function should be running', function () {
      expect(exportTest).to.equal('Test function running')
    })
  })

  describe('My tests', function () {
    it('return -1 if input is not a string', function () {
      expect(kata.accum(1)).to.equal(-1)
    })
  })

  describe('Code wars tests', function () {
    it('Return echo string 1', function () {
      expect(kata.accum('ZpglnRxqenU')).to.equal('Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu')
    })
    it('Return echo string 2', function () {
      expect(kata.accum('NyffsGeyylB')).to.equal('N-Yy-Fff-Ffff-Sssss-Gggggg-Eeeeeee-Yyyyyyyy-Yyyyyyyyy-Llllllllll-Bbbbbbbbbbb')
    })
    it('Return echo string 3', function () {
      expect(kata.accum('MjtkuBovqrU')).to.equal('M-Jj-Ttt-Kkkk-Uuuuu-Bbbbbb-Ooooooo-Vvvvvvvv-Qqqqqqqqq-Rrrrrrrrrr-Uuuuuuuuuuu')
    })
    it('Return echo string 4', function () {
      expect(kata.accum('EvidjUnokmM')).to.equal('E-Vv-Iii-Dddd-Jjjjj-Uuuuuu-Nnnnnnn-Oooooooo-Kkkkkkkkk-Mmmmmmmmmm-Mmmmmmmmmmm')
    })
    it('Return echo string 5', function () {
      expect(kata.accum('HbideVbxncC')).to.equal('H-Bb-Iii-Dddd-Eeeee-Vvvvvv-Bbbbbbb-Xxxxxxxx-Nnnnnnnnn-Cccccccccc-Ccccccccccc')
    })
  })
})

// to start hot testing, run: nodemon --exec 'mocha FILENAME.js'
// tests will rerun via nodemon on change/save of FILENAME.js

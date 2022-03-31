'use strict'
const words = require('./words.json')
const sample = require('lodash.sample')

module.exports = function () {
  const givenName = sample(words.givenPart1) + sample(words.givenPart2)
  let surname = sample(words.surnamePart1) + sample(words.surnamePart2)
  // 1% chance of prefix with "Mc"
  if (Math.random() < 0.01) {
    surname = 'Mc' + surname
  }
  // 1% chance of prefix with "Von"
  if (Math.random() < 0.01) {
    surname = 'Von ' + surname
  }
  return givenName + ' ' + surname
}

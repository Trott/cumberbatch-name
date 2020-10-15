'use strict'
var test = require('ava')
var cumberbatch = require('./')

test('returns a random Cumberbatch name', function (t) {
  t.assert(cumberbatch().length > 0)
})

test('returns a given name and a surname', function (t) {
  t.assert(cumberbatch().match(/^\w+ (?:Von )?\w+$/))
})

test('uses "Von" and "Mc" infrequently', function (t) {
  var original = Math.random
  Math.random = () => 0
  var name = cumberbatch()
  t.assert(name.match(/^\w+ Von Mc\w+$/), name)
  Math.random = () => 0.1
  t.assert(cumberbatch().match(/^\w+ \w+$/))
  Math.random = original
})

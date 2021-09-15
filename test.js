'use strict'
const cumberbatch = require('./')
const assert = require('assert')

// returns a random Cumberbatch name
assert.ok(cumberbatch().length > 0)

// returns a given name and a surname
assert.match(cumberbatch(), /^\w+ (?:Von )?\w+$/)

// uses "Von" and "Mc" infrequently'
{
  const original = Math.random
  Math.random = () => 0
  const name = cumberbatch()
  assert.match(name, /^\w+ Von Mc\w+$/)
  Math.random = () => 0.1
  assert.match(cumberbatch(), /^\w+ \w+$/)
  Math.random = original
}

#!/usr/bin/env node
'use strict'
const meow = require('meow')
const cumberbatch = require('./')

meow({
  help: [
    'Examples',
    '  $ cumberbatch-name',
    '  Bendyduck Cucumberpants'
  ].join('\n')
})

console.log(cumberbatch())

#!/usr/bin/env node
import meow from 'meow'
import cumberbatch from './index.js'

meow({
  help: [
    'Examples',
    '  $ cumberbatch-name',
    '  Bendyduck Cucumberpants'
  ].join('\n'),
  importMeta: import.meta
})

console.log(cumberbatch())

#!/usr/bin/env node
'use strict';
var meow = require('meow');
var cumberbatch = require('./');

meow({
	help: [
		'Examples',
		'  $ cumberbatch',
		'  Bendyduck Cucumberpants'
	].join('\n')
});

console.log(cumberbatch());

'use strict';
var test = require('ava');
var cumberbatch = require('./');

test('returns a random Cumberbatch name', function (t) {
	t.assert(cumberbatch().length > 0);
});

test('returns a given name and a surname', function (t) {
	t.assert(cumberbatch().match(/^\w+ \w+$/));
});


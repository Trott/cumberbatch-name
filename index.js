'use strict';
var words = require('./words.json');
var sample = require('lodash.sample');

module.exports = function () {
	var givenName = sample(words.givenPart1) + sample(words.givenPart2);
	var surname = sample(words.surnamePart1) + sample(words.surnamePart2);
	return givenName + ' ' + surname;
};

'use strict';
var words = require('./words.json');
var sample = require('lodash.sample');

module.exports = function () {
	var givenName = sample(words.givenPart1) + sample(words.givenPart2);
	var surname = sample(words.surnamePart1) + sample(words.surnamePart2);
	// 1% chance of prefix with "Mc"
	if (Math.random() < 0.1) {
		surname = 'Mc' + surname;
	}
	return givenName + ' ' + surname;
};

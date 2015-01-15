'use strict';
var words = require('./words.json');
var _ = require('lodash');

module.exports = function () {
	var givenName = _.sample(words.givenPart1) + _.sample(words.givenPart2);
	var surname = _.sample(words.surnamePart1) + _.sample(words.surnamePart2);
	return givenName + ' ' + surname;
};

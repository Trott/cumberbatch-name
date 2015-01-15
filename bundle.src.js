/* global document */
var cumberbatch = require('./index.js');

var name = document.createTextNode(cumberbatch());

document.getElementById('result').appendChild(name);
'use strict';
const path = require('path');

module.exports = {
	extends: path.join(__dirname, 'index.js'),
	rules: {
		'inferno/jsx-indent-props': [2, 2],
		'inferno/jsx-indent': [2, 2]
	}
};

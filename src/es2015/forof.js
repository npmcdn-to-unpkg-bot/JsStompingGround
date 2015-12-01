var myFs = require('../readFileAsync');
var log = console.log;
var lo = require('lodash');

function greet(peep) {
	log(`hello ${peep.first}!`)
}
function greetPeeps(peeps) {
	lo.map(peeps, x => greet(x));
}

module.exports = {
	test: function() {

		myFs.loadFileAsJson('../../data/people.json')
			.then(greetPeeps)
			.catch(x => log('ERR', x));
	},
}

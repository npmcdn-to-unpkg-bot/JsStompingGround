import {log} from '../utils';


var myFs = require('../node/readFileAsync');

function greet(peep) {
	log(`hello ${peep.first}!`)
}


myFs.loadFileAsJson('../../data/people.json')
	.then(peeps=>peeps.map(greet))
	.catch(x => log('ERR', x));

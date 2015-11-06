var util = require('util');
var count = 5;
module.exports  = {
	run: function() {
		console.log(util.inspect(this, {showHidden:true}));

		count = count + 1;
		console.log('some job', count);
	},
	happen: function() {
		return null;
	},
}

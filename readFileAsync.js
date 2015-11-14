var fs = require('fs');


module.exports = {
	test: function() {
		var self = this;
		var people = null;
		self.loadFile('people.json', (data) => {
			var x = 0;
			self.people = self.loadJson(data) || [];
			self.people.forEach(item =>
				console.log(`${++x}. ${item.first} ${item.last}, was loaded.`)
			);
		});
	},
	loadFile: function(name, cb) {
		var path = __dirname + '/data/' + name;
		var file = fs.readFile(path, 'utf8', function(err, data) {
			if(err) {
				console.log('ERROR reading from "' + path + '".', err);
			}
			cb(data);
		});
	},
	loadJson: function(data) {
		var ret = null;
		try {
			ret = JSON.parse(data);
		} catch(e) {
			console.log('BOOM:', e);
		};
		return ret;
	},
	loadCsv: function(data) {

	},
}

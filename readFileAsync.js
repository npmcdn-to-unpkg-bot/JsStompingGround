var fs = require('fs');

var loadFile = function (name) {
	var path = getPath(name);
	return new Promise((resolve, reject) => {
		fs.readFile(path, 'utf8', function(err, data) {
			err ? reject(err) : resolve(data);
		});
	});
};
var loadFileAsString = function(name) {
		return loadFile(name);
};
var loadFileAsJson = function(name) {
	return new Promise((resolve, reject) => {
		loadFileAsString(name)
			.then(data => JSON.parse(data.trim()))
			.then(resolve)
			.catch(reject);
	});
};
var getPath = function(path) {
	return __dirname + '/' + path;
};

module.exports = {
	run: function() {
		loadFileAsJson('data/geo.json')
			.then(data => console.log(data.quadrant))
			.catch(err => console.log(err));
	},
	loadFileAsString: loadFileAsString,
	loadFileAsJson: loadFileAsJson,
}

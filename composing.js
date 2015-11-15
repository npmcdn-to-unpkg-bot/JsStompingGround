
function noop(item, cb) {
	cb(item);
}
function upper(item, cb) {
	cb(item.toUpperCase());
}

function bling(item, cb) {
	cb('xX' + item + 'Xx');
}

var tasks = [noop, upper, bling];
function getTasks() {
	return tasks.slice(0);
}

function workflow(item) {
	var list = getTasks();
	var _item = item;

	(function loop() {

		var task = list.shift();
		task && task(_item, next);

		function next(result) {
			_item = result;
			console.log(_item);
			loop();
		 }
	})();
}

module.exports = {
	test: function() {
		var data = ['cow', 'pig', 'hippo'];
		data.forEach(workflow);
	}
}

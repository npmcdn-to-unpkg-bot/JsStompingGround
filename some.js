
module.exports  = {
	run: function() {

		var fn = function fn() { return 'fn'; };
		function fn2() {
			return 'fn2';
		}
		(function() {
			console.log(fn2());
		})();
	},
}

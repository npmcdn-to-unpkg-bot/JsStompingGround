

var obj = {
	c: 'what the what?',
};

module.exports = {
	test: function() {
		// every function has an environment object (internally managed)
		// which stores all variables the function needs to perform it's job.
		// a closure stores a function together with it's environment: a mapping associating each free variable of the function (variables that are used locally, but defined in an enclosing scope) with the value or storage location to which the name was bound when the closure was created.
		
		var b = 'free variable';
		
		var pureFn = function(a) {
			var log = console.log;
			var b = 'function';
			
			log(`${a} ${b}! The presence of local variables and function arguments do not produce a closure.`);
		};
		
		var closureFn = function(a) {
			console.log(`A ${a} is created when we access a ${b}, i.e., a variables not locally defined or passed in as a function argument.`);
			console.log(this.c);
		};
		
		pureFn('Pure');
		closureFn('Closure');
		
		//closureFn.call(obj, 'Closure');
	},
}
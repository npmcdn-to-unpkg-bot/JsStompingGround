var util = require('util');
var stdin = process.stdin;
var chokidar = require('chokidar');
// var EXIT_CONDITION = false;

stdin.resume();
stdin.setEncoding('utf8');
stdin.on('data', function (text) {
    text = text.trim();
    if (text === 'quit') {
		process.exit();
    }
});

// , {ignored: /[\/\\]\./}
chokidar.watch('./*.js').on('change', function(path) {
	var key = require.resolve('./' + path);
	delete require.cache[key];

    var lines = process.stdout.getWindowSize()[1];
    for(var i = 0; i < lines; i++) {
        console.log('\r\n');
    }
    try {
    	var job = require(key) || {};
    	if(job.hasOwnProperty('run')) {
		    job.run();
    	} else {
            console.log('.no run method found.');
    	}
    } catch (e) {
        var props = Object.getOwnPropertyNames(e);
        props.forEach(function(p) {
            try {
                var s = `Error.${p}=`;
                console.log(s, e[p]);
            } catch(e) { return 1; }
        });
    }
});






// var repl = require('repl');
//var replSvr = repl.start({prompt:'sky>'});

//(function wait () {
//   if (!EXIT_CONDITION) setTimeout(wait, 1000);
//}.bind(this))();

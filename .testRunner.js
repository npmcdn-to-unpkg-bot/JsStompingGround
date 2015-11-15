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
chokidar.watch(['./*.js','./es2015/*.js']).on('change', function(path) {
	var key = require.resolve('./' + path);
	delete require.cache[key];
    var mod = require(key) || {};

    var cmdHeader = [path];
    if(mod.hasOwnProperty('test')) {
        cmdHeader.push('test()');
    } else {
        cmdHeader.push('Did you forget to export a test function?');
    }
    makeCmdHeader(cmdHeader);
    mod.test();
});


function makeCmdHeader(cmdHeader) {
    var line = '##################################################';
    var prefix = '#  ';
    var log = console.log;
    
    log(line);
    for(var i = 0, len = cmdHeader.length; i < len; i++) {
        log(prefix + cmdHeader[i]);
    }
    log(line);    
}



//var repl = require('repl');
//var replSvr = repl.start({prompt:'sky>'});

//(function wait () {
//   if (!EXIT_CONDITION) setTimeout(wait, 1000);
//}.bind(this))();
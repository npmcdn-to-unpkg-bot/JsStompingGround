var fs = require('fs');
var path = require('path');
var log = console.log;
var crawlPath = process.env.HOME + '/js/data';
var lineBreak = '\r\n';

// recursive rename from command
// for /R %x in (*.jsx) do ren "%x" *.js


module.exports = {
    test: function () {

        fsCrawlP(crawlPath, function (err, results) {
            err ? log('ERROR:', err)
                : log(`Crawling ${crawlPath} using parallel loop:`, lineBreak, results);
        });
        
        fsCrawlS(crawlPath, function (err, results) {
            err ? log('ERROR:', err)
                : log(`Crawling ${crawlPath} using serial loop:`, lineBreak, results);
        });
    }
}


function fsCrawlP(dir, cb) {
    var results = [];

    fs.readdir(dir, function (err, dirItems) {
        if (err) return cb(err);

        var pending = dirItems.length;
        if (!pending) return cb(null, results);

        dirItems.forEach(function (dirItem) {
            dirItem = path.resolve(dir, dirItem);

            fs.stat(dirItem, function (err, stat) {
                if (stat && stat.isDirectory()) {
                    fsCrawlP(dirItem, function (err, res) {
                        results = results.concat(res);
                        if (!--pending) cb(null, results);
                    });
                } else {
                    results.push(dirItem);
                    if (!--pending) cb(null, results);
                }
            });
        });
    });
};


var fsCrawlS = function (dir, cb) {
    var results = [];
    
    fs.readdir(dir, function (err, dirItems) {
        if (err) return cb(err);

        var i = 0;
        (function next() {
            var item = dirItems[i++];

            if (!item) return cb(null, results);
            
            item = dir + '/' + item;
            
            fs.stat(item, function (err, stat) {

                if (stat && stat.isDirectory()) {
                    fsCrawlS(item, function (err, res) {
                        results = results.concat(res);
                        next();
                    });
                } else {
                    results.push(item);
                    next();
                }
            });
        })();
    });
};

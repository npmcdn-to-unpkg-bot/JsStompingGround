var fs = require('fs');
var util = require('util');

module.exports = {
    test: function() {
        var log = console.log;
        var fileStream = fs.createReadStream('../data/people.json');

        // log('--stream--');
        // log(util.inspect(fileStream));
        log('--stream start--');

        fileStream.on('readable', function() {

            var chunk;
            while((chunk = fileStream.read()) != null) {
                log(chunk.toString());
            }
        });

        fileStream.on('end', function(chunk) {
            log('--stream end--');
        });
    },
};

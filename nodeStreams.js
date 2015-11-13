var fs = require('fs');

module.exports = {
    run: function() {
        var rStream = fs.createReadStream('./data/people.json');

        rStream.on('data', function(chunk) {
            console.log('CHUNK:', chunk.toString());
        });
        rStream.on('end', function(chunk) {
            console.log('END:');
        })
    },
}
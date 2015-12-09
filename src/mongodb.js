import fs from 'fs';
import mongodb, {MongoClient} from 'mongodb';

var DATA_ROOT = './data/';

module.exports = {
    test: function() {

        var raw = fs.readFileSync(DATA_ROOT + 'alfa-art.json', 'utf8');
        var json = JSON.parse(raw);
        // console.log(json);

        var url = 'mongodb://localhost/alfa';
        MongoClient.connect(url, function(err, db) {
            var collection = db.collection('art');
            collection.insertMany(json, function(err, result) {
                if(err) { console.log('ERROR:', err); }
                console.log('INSERT:', result);
            });
        });
    },
}

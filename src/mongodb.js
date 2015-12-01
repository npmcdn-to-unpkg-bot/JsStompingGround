var mongojs = require('mongojs');
var log = console.log;
var localDb = mongojs("mongodb://localhost:27017/test", ["finance"]);
var remoteDb = mongojs("mongodb://jsDev:2four2four@ds054308.mongolab.com:54308/js-stomping-ground", ['finance'], {authMechanism: 'ScramSHA1'});

var db = remoteDb;

module.exports = {
    test: function () {
        
        var finance = db.collection("finance");

        var bank = {
            "isActive": false,
            "balance": "$3,960.64",
            "age": 30,
            "eyeColor": "blue",
            "name": "Dawn Keith",
            "gender": "female",
            "company": "COSMOSIS",
            "email": "dawnkeith@cosmosis.com",
            "phone": "+1 (839) 437-3421",
            "address": "392 Clifford Place, Fontanelle, Arizona, 2687"
        };
        
        finance.save(bank, function() {
            log('SAVE:', arguments);
        });
        // finance.find(function() {
        //     log('FIND:', arguments);
        // })
        log(finance.find());
        
    }
}

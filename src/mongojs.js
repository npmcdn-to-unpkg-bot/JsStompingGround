import mongojs from 'mongojs';

var log = console.log;
var local = ['mongodb://localhost:27017/test'];
var remote =['mongodb://jsDev:2four2four@ds054308.mongolab.com:54308/js-stomping-ground', {authMechanism: 'ScramSHA1'}];

var db = mongojs(...local);
var finance = db.collection('finance');

module.exports = {
    test: function () {

        finance.find(function(err, docs) {
            log('ALL:', docs);
        });

    },
}

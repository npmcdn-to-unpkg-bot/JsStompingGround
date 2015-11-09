'use strict';
var assign = require('object-assign');
var myfs = require('./readFileAsync.js');
var lo = require('lodash');

// functions can access their parents props,
// and their parents parents props, etc...
function MyMapper(config) {
    // console.log('MyMapper:', config.sectors);
    var sectors = config.sectors || {};
    var quadrants = config.quadrants || {};
    var areas = config.areas || {};
    var sector = config.sector || sectors.default || 'none';

    return (function() { // create yet another context
        var _sector = sector;
        return {
            get sector () {
                return _sector;
            },
            set sector (val) {
                if(lo.contains(sectors, val)) {
                    _sector = val;
                } else {
                    console.log(val + ' is not a valid sector.');
                }
            },
        };
    })();
}

function test(o) {
    console.log(o.sector);
    o.sector = 'Zeta';
    console.log(o.sector);
    o.sector = 'Bingo';
    console.log(o.sector);
}

module.exports = {
    run: function() {
        myfs.loadFileAsJson('data/geo.json')
            .then(MyMapper)
            .then(test);
    },
}

'use strict';
var util = require('util');
var myfs = require('./readFileAsync.js');

function testVarVisibility(data) {
    var quadrant = data.quadrant;
    var sector = data.sector;

    function Constructor1() {
        this.quadrant = quadrant.II;
        this.InnerObject = new function() {
            return {
                sector: sector.Epsilon,
            };
        };
    }
    var o = new Constructor1();
    console.log(o);
}


module.exports = {
    run: function() {
        myfs.loadFileAsJson('data/geo.json')
            .then(testVarVisibility);
    },

}

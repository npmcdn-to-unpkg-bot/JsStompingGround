var jsdom = require('jsdom').jsdom;
var React = require('react/addons');
var TestUtils = React.addons.TestUtils;

var doc = jsdom('<!doctype html><html><body><div id="app"></div></body></html>');
var win = doc.defaultView;

global.document = doc;
global.window = win;

Object.keys(win).forEach((key) => { if(!(key in global)) { global[key] = win[key]; } });

var c1 = React.createClass({render:() => <div>hello {this.props.name || 'world'}</div>});
var frag = TestUtils.renderIntoDocument(<c1 name='Bubba' />); 
var app = document.getElementById('app').appendChild(frag);

module.exports = {
    test: function() {
        console.log(document.documentElement.outerHTML);
    }
}


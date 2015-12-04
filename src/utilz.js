
// patch console
if(console && !console.clear) {
	console.clear = function () {
		process.stdout.write('\x1Bc'); // apparently win specific
		process.stdout.write('\u001B[2J\u001B[0;0f');
		return;
	}
}

export function log () {
	if(console && console.log) {
		var cr = '\r\n';
	    // var args = Array.prototype.slice.call(arguments);
	    console.log(...arguments);
	    console.log(cr);
	}
}

export function toType(obj) {
	return ({}).toString.call(obj).match(/\s([a-z|A-Z]+)/)[1].toLowerCase();
}

export function protowalk(obj) {
	var indentSize = 4,
		indentStep = 0,
		listProperties = function listProperties(obj) {

			var indent = new Array(indentStep * indentSize).join(' '),
				proto = Object.getPrototypeOf(obj);

			console.log(indent, '--------------------------------------------------');
			console.log(indent, obj.Name || obj);
			console.log(indent, '[[P]] -> ', proto)
			//console.log(indent, 'prototype -> ', obj.prototype || 'null')

			// for(key in obj) {
				// if (obj.hasOwnProperty(key)) {
				// console.log(indent, key + ' -> ' + obj[key]);
				// }
			// }
			Object.getOwnPropertyNames(obj).forEach(function(val, idx, array) {
				console.log(indent, val + ' -> ' + obj[val] || 'null');
			});

			if(proto !== null) {
				indentStep++;
				listProperties(proto);
			}
		}
	listProperties(obj);
}

export function objwalk(obj, level) {
	var indentSize = 4,
		indentStep = level || 0,
		prop,
		indent = new Array(indentStep * indentSize).join(' ');

	console.log(indent, '--------------------------------------------------');

	if(obj === undefined) {
		console.log(indent, undefined);
	} else {
		for(prop in obj) {
			if(typeof obj[prop] === 'object') {
				objwalk(obj[prop], indentStep + 1);
			} else {
				console.log(indent, prop + ': ' + obj[prop]);
			}
		}
	}
}

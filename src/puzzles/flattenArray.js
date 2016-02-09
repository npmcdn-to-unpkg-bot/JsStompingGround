import {log} from '../utils';

// given an array of arrays, flatten it so that every element is contained within
// a single array

const a = [1, [2, 3, 4], 5, 6, [7, 8], 9];
const b = [1, 2, 3, [4, 5, [6, 7, 8, 9]]];
const c = [1, [2, [3, [4, [5], 6], 7], 8], 9];
const testA = flatten(a.slice());
const testB = flatten(b.slice());
const testC = flatten(c.slice());
log('test A', a, ' -> ', testA);
log('test B', b, ' -> ', testB);
log('test C', c, ' -> ', testC);

function flatten (arr) {
    return arr.reduce(function(flat, toFlatten) {
        return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
    }, []);
}

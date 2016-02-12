import {log, generateRandomIntegers} from '../utils';
import BinarySearchTree from './BinarySearchTree';


var items = generateRandomIntegers(20);
log('random numbers:', items.toString());

var bst = new BinarySearchTree();
items.forEach(item => bst.add(item));

let test = [items[0], 1002, items[10], items[items.length -1]];
test.forEach(item=>log(`Does bst contain ${item}? ${bst.contains(item)}`));

log(`Size of tree? ${bst.size()}`);
log('toArray: ', bst.toArray());
log('toString:', bst.toString());

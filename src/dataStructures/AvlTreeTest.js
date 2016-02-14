import {generateRandomIntegers} from '../utils';
import AvlTree from './AvlTree';


let log = console.log;

let keys = generateRandomIntegers(20);
log('random keys:', keys.toString());

var avl = new AvlTree();
keys.forEach((item, i) => avl.insert(item, i));

let size = avl.size();``
log(`Size of tree? ${size}`);
log(`Height of tree? ${avl.height()}`);

let test = [keys[0], 1002, keys[10], keys[size -1]];
test.forEach(item=>log(`Does tree contain ${item}? ${avl.contains(item)}`));

log('toArray: ', avl.toArray().sort((a, b) => {
  let test = a.height > b.height ? -1 : a.height < b.height ? 1 : 0;
  return test;
}));

import {log, generateRandomIntegers} from '../utils';
import AvlTree from './AvlTree';

let keys = generateRandomIntegers(20);
log('random keys:', keys.toString());

var avl = new AvlTree();
keys.forEach((item, i) => avl.insert(item, i));

log('');
log('Is BST?', avl.isBst());
log(`Size of tree? ${avl.size()}`);
log(`Height of tree? ${avl.height()}`);
log('');
avl.prettyPrint();
log('');

log('');
let deleteKeys = [keys[4], keys[14], keys[7], keys[6], keys[18], keys[5]];
deleteKeys.forEach(key => {
  avl.delete(key);
});

log('');
avl.prettyPrint();
log('');
log('Is BST?', avl.isBst());
log(`Size of tree? ${avl.size()}`);
log(`Height of tree? ${avl.height()}`);
// log(avl.toArray().sort((a,b) => {
//   return a.height < b.height ? -1 : a.height > b.height ? 1 : 0;
// }).reverse());

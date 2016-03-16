import {swap} from '../algorithms/sortHelpers.js';
import {log} from '../utils';


let i = 0, original = Array(100).fill(0);
while(i < original.length) {
  original[i] = ++i;
}
const shuffled = shuffle(original.slice());

log('original:', original.toString());
log('');
log('shuffled:', shuffled.toString());

// we can take some queues from bubble sort to shuffle in place
function shuffle(a) {
  let r, j = a.length - 1;

  while(j > 0) {
    r = Math.round(Math.random() * j);
    swap(a, r, j);
    j--;
  }
  return a;
}

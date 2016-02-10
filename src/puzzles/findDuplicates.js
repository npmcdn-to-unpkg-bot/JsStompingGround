import {log} from '../utils';
import {swap} from '../algorithms/sortHelpers';

log('given any array, determine all duplicates');


const aInput = [14,21,3,47,15,86,72,8,39,10];
const aOutput = findDuplicates(aInput);
log('A input:', aInput.toString());
log('A output:', aOutput.toString());

const bInput = [0,6,0,21,55,3,93,14,39,3,10,15,86,72,8,39,10];
const bOutput = findDuplicates(bInput);
log('B input:', bInput.toString());
log('B output:', bOutput.toString());


function findDuplicates(input) {
  if(!Array.isArray(input)) {
    log('hasDuplicates requires and array.');
    return;
  }
  const a = input.slice().sort();
  let i = a.length - 1, t = null, d = [];

  while (i > 0) {
    if(a[i - 1] === a[i]) {
      // duplicate!
      if(i === 1) {
        // last iteration is a duplicate, push now
        d.push(a[i]);
      } else {
        // for now, we note the duplicate value
        t = a[i];
      }
    }
    else {
      if(t !== null) {
        d.push(t);
        t = null;
      }
    }
    i--;
  }
  return d;
}

import {log} from '../utils';
import {swap} from '../algorithms/sortHelpers';

log('given any array, determine all duplicates');


const aInput = [14,21,3,47,15,86,72,8,39,10];
const aOutput = findDuplicatesViaMap(aInput);
log('A input:', aInput.toString());
log('A output:', aOutput.toString());

const bInput = [14,39,3,10,15,86,72,8,39,10];
const bOutput = findDuplicatesViaMap(bInput);
log('B input:', bInput.toString());
log('B output:', bOutput.toString());


// using a map (and it's unique keys requirement) to discover duplicates
function findDuplicatesViaMap(input) {
  if(!Array.isArray(input)) {
    log('hasDuplicates requires and array.');
    return;
  }
  const a = input.slice();
  let i, map = Object.create(null);
  let duplicates = [];

  for(i = 0;i < a.length; i++){
    if(map[a[i]]) {
      duplicates.push(a[i]);
      // map[a[i]]++;
    } else {
      map[a[i]] = 1;
    }
  }
  // log(map);
  return duplicates;
}


function findDuplicates(input) {
  if(!Array.isArray(input)) {
    log('hasDuplicates requires and array.');
    return;
  }
  const a = input.slice().sort();
  let i = 0, j = a.length - 1;

  while (j > i) {
    if(a[j] === a[j - 1]) {
      swap(a, j, i);
      i++
    }
    j--;
  }
  return a.slice(0, i);
}

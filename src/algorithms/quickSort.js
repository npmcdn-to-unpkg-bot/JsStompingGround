import {log, generateRandomIntegers} from '../utils';
import {swap} from './sortHelpers';


log('Given an unsorted array of numbers, produce a sorted array.')
let unsorted = generateRandomIntegers(20);
let sorted = unsorted.slice();

log('unsorted', unsorted.toString());
log('sorted', quickSort(sorted).toString());


function quickSort(a, left, right) {
  if(a.length > 1) {
    left = typeof left !== 'number' ? 0 : left;
    right = typeof right !== 'number' ? a.length - 1 : right;

    if(left < right) {
      let pivot = partition(a, left, right);
      quickSort(a, left, pivot - 1);
      quickSort(a, pivot + 1, right);
    }
  }
  return a;
}

function partition(a, left, right) {
  let x = a[right];
  let i = left - 1;
  for(let j = left; j < right; j++) {
    if(a[j] <= x) {
      i++;
      swap(a, i, j);
    }
  }
  i++;
  swap(a, i, right);
  return i;
}

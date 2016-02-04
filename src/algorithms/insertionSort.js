import {log, generateRandomIntegers} from '../utils';
import {swap} from './sortHelpers';


log('Given an unsorted array of numbers, produce a sorted array.')
let unsorted = generateRandomIntegers(20);
let sorted = unsorted.slice();

log('unsorted', unsorted.toString());
log('sorted', insertionSort(sorted).toString());

function insertionSort(a) {
  let i, j = 1;
  while (j < a.length) {
    for(i = j; i >= 0; i--) {
      if(a[i] < a[i-1]) {
        swap(a, i, i-1);
      }
    }
    j++;
  }
  return a;
}

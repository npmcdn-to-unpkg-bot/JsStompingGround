import {log, generateRandomIntegers} from '../utils';

log('Given an unsorted array of numbers, produce a sorted array.')
let unsorted = generateRandomIntegers(20);
let sorted = JSON.parse(JSON.stringify(unsorted));

log('unsorted', unsorted.toString());
log('sorted', bubbleSort(sorted).toString());

function bubbleSort(a) {
  let k = 0, i, temp;
  while(k < a.length) {
    temp = null;
    for(i = 0; i < a.length; i++) {
      if(a[i] > a[i+1]) {
        temp = a[i];
        a[i] = a[i+1];
        a[i+1] = temp;
      }
    }
    if(temp === null) {
      break; // no swapping means we've sorted early
    }
    k++;
  }
  return a;
}

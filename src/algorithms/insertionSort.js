import {log, generateRandomIntegers} from '../utils';

log('Given an unsorted array of numbers, produce a sorted array.')
let unsorted = generateRandomIntegers(20);
let sorted = JSON.parse(JSON.stringify(unsorted));

log('unsorted', unsorted.toString());
log('sorted', insertionSort(sorted).toString());

function insertionSort(a) {
  
  return a;
}

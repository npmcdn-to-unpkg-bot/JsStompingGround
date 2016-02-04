import {log, generateRandomIntegers} from '../utils';
import {swap} from './sortHelpers';


log('Given an unsorted array of numbers, produce a sorted array.')
let unsorted = generateRandomIntegers(20);
let sorted = unsorted.slice();

log('unsorted', unsorted.toString());
log('sorted', selectionSort(sorted).toString());

function selectionSort(a) {
  let i, j, k;
  i = j = k = 0;
  while(k < a.length) {
    for(i = j = k; i < a.length; i++) {
      if(a[i] < a[j]) {
        j = i;
      }
    }
    if(k !== j) {
      swap(a, k, j);
    }
    k++;
  }
  return a;
}

// function selectionSortSecondPass(a) {
//   let i, j, k, t;
//   i = j = k = t = 0;
//   while(k < a.length) {
//     for(j = i = k; i < a.length; i++) {
//       if(a[i] < a[j]) {
//         j = i;
//       }
//     }
//     t = a[k];
//     a[k] = a[j];
//     a[j] = t;
//     k++;
//   }
//   return a;
// }

// function selectionSortFirstPass(a) {
//   let begin = 0;
//   let end = a.length;
//   let maxIndex, i, temp;
//
//   while(begin < end) {
//     maxIndex = begin;
//     for(maxIndex = i = begin; i < end; i++) {
//       if(a[i] < a[maxIndex]) {
//         maxIndex = i;
//       }
//     }
//     temp = a[begin];
//     a[begin] = a[maxIndex];
//     a[maxIndex] = temp;
//     begin++;
//   }
//   return a;
// }

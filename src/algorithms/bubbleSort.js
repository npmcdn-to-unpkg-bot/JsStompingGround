import {log, generateRandomIntegers} from '../utils';
import {swap} from './sortHelpers';


log('Given an unsorted array of numbers, produce a sorted array.')
let unsorted = generateRandomIntegers(20);
let sorted = JSON.parse(JSON.stringify(unsorted));

log('unsorted', unsorted.toString());
log('sorted', bubbleSort(sorted).toString());


function bubbleSort(a) {
  let k = a.length, i, didSwap;
  while(k > 0) {
    didSwap = false;
    for(i = 0; i < k; i++) {
      if(a[i] > a[i+1]) {
        swap(a, i, i+1);
        didSwap = true;
      }
    }
    if(didSwap === false) {
      break; // no swapping means we've sorted early
    }
    k++;
  }
  return a;
}

// not really correct, at least not efficient...
// function bubbleSort(a) {
//   let k = 0, i, didSwap;
//   while(k < a.length) {
//     didSwap = false;
//     for(i = 0; i < a.length; i++) {
//       if(a[i] > a[i+1]) {
//         swap(a, i, i+1);
//         didSwap = true;
//       }
//     }
//     if(didSwap === false) {
//       break; // no swapping means we've sorted early
//     }
//     k++;
//   }
//   return a;
// }

// function bubbleSort(a) {
//   let k = 0, i, temp;
//   while(k < a.length) {
//     temp = null;
//     for(i = 0; i < a.length; i++) {
//       if(a[i] > a[i+1]) {
//         temp = a[i];
//         a[i] = a[i+1];
//         a[i+1] = temp;
//       }
//     }
//     if(temp === null) {
//       break; // no swapping means we've sorted early
//     }
//     k++;
//   }
//   return a;
// }

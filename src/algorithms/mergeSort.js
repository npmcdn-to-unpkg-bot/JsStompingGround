import {log, generateRandomIntegers} from '../utils';
import {swap} from './sortHelpers';


log('Given an unsorted array of numbers, produce a sorted array.')
let unsorted = generateRandomIntegers(20);
let sorted = unsorted.slice();

log('unsorted', unsorted.toString());
log('sorted', mergeSort(sorted).toString());


function mergeSort(a) {
  let k = Math.floor(a.length / 2);
  if(k > 0) {
    return merge(mergeSort(a.slice(0, k)), mergeSort(a.slice(k)));
  }
  return a;
}

function merge(l, r) {
  let k = l.length + r.length;
  let i = 0, j = 0, a = [];
  l.push(Infinity);
  r.push(Infinity);
  while(k > 0) {
    if(l[i] < r[j]) {
      a.push(l[i++]);
    } else {
      a.push(r[j++]);
    }
    k--;
  }
  return a;
}


// function mergeSort(a) {
//   let k = Math.floor(a.length / 2);
//   if(k > 0) {
//     let l = mergeSort(a.slice(0, k));
//     let r = mergeSort(a.slice(k));
//     a = merge(l, r);
//   }
//   return a;
// }

// function merge(l, r) {
//   // console.log('merging:', l, r);
//   let k = l.length + r.length;
//   let i = 0, j = 0, a = [];
//   l.push(Infinity);
//   r.push(Infinity);
//   while(k > 0) {
//     if(l[i] < r[j]) {
//       a.push(l[i]);
//       i++;
//     } else {
//       a.push(r[j]);
//       j++;
//     }
//     k--;
//   }
//   return a;
// }

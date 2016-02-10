import {log, generateRandomIntegers} from '../utils';
import {swap} from './sortHelpers';


log('Given an unsorted array of numbers, produce a sorted array.')
let unsorted = generateRandomIntegers(20);
let sorted = unsorted.slice();

log('unsorted', unsorted.toString());
log('sorted', quickSort(sorted).toString());

// divide and conquer
// O(n log(n))
function quickSort(a, left, right) {
  if(a.length > 1) {
    left = typeof left !== 'number' ? 0 : left;
    right = typeof right !== 'number' ? a.length - 1 : right;

    if(left < right) {
      let pivot = partition(a, left, right);
      // as a result of the partition call, the value at pivot is in it's
      // correct and final location. We now use recursion on the remaining
      // items to the left and right of the pivot
      quickSort(a, left, pivot - 1);
      quickSort(a, pivot + 1, right);
    }
  }
  return a;
}

// we take the last index (pivot), find all value less than or equal to pivot,
// swapping each to the front of the array. We then swap the pivot itself
// creating a left side <= pivot and a right side > pivot.
// Finally, we return the final index of the pivot
function partition(a, left, right) {
  let p = a[right]; // right index becomes pivot
  let i = left - 1; // set insertion pointer index
  for(let j = left; j < right; j++) {
    if(a[j] <= p) {
      i++;
      swap(a, i, j); // swap value into the <= portion
    }
  }
  i++;
  swap(a, i, right); // swap pivot into position
  return i; // return the pivot index
}

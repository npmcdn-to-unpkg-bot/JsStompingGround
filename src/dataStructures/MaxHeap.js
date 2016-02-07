import {log, generateRandomIntegers} from '../utils';
import {swap} from '../algorithms/sortHelpers';


log('Given an unsorted array of numbers, produce a max heap binary tree.')
let unsorted = generateRandomIntegers(20);
let maxHeap = buildMaxHeap(unsorted.slice());

log('unsorted', unsorted.toString());
log('max heap', maxHeap.toString());

// leaf count is always floor(n/2) + 1
// leaf nodes are already max heap (no children with larger values), so we start
// at the last non leaf and work our way to the root
function buildMaxHeap(a) {
  const heapSize = a.length - 1;
  const lastNonLeaf = Math.floor(heapSize/2);
  for(let i = lastNonLeaf; i >= 0; i--) {
    // console.log('buildMaxHeap', i);
    MaxHeapify(a, i);
  }
  return a;
}

// for each node, test children for largest value, first left, than right
// if and when we find largest, we swap parent with largest, and then we recursively
// call MaxHeapify on the largest node position
function MaxHeapify(a, i) {
  console.log('MaxHeapify', a.toString(), i);
  const heapSize = a.length - 1;
  const l = i * 2;
  const r = i * 2 + 1;

  let largest = i;
  if(l < heapSize && a[l] > a[i]) {
    largest = l;
  }
  if(r < heapSize && a[r] > a[largest]) {
    largest = r;
  }
  if(largest !== i) {
    swap(a, largest, i);
    MaxHeapify(a, largest);
  }
}

import {log, generateRandomIntegers} from '../utils';
import {swap} from '../algorithms/sortHelpers';


log('Given an unsorted array of numbers, produce a max heap binary tree.')
let unsorted = generateRandomIntegers(20);
let maxHeap = buildMaxHeap(unsorted.slice());

log('unsorted', unsorted.toString());
verifyMaxHeap(unsorted);
log('sorted', maxHeap.toString());
verifyMaxHeap(maxHeap);


// leaf count is always floor(n/2) + 1
// leaf nodes are already max heap (no children with larger values), so we start
// at the last non leaf and work our way to the root
function buildMaxHeap(a) {
  const heapSize = a.length;
  const lastNonLeafIndex = Math.floor(heapSize / 2) - 1; // minus 1 for zero-based array
  for(let i = lastNonLeafIndex; i >= 0; i--) {
    maxHeapify(a, i);
  }
  return a;
}

// for each node, test children for largest value, first left, than right
// if and when we find largest, we swap parent with largest, and then we recursively
// call MaxHeapify on the largest node position
function maxHeapify(a, i) {
  const heapSize = a.length;
  const l = i * 2 + 1;
  const r = l + 1;
  let largest = i;

  if(l < heapSize && a[l] > a[largest]) {
    largest = l;
  }
  if(r < heapSize && a[r] > a[largest]) {
    largest = r;
  }
  if(largest !== i) {
    swap(a, largest, i);
    maxHeapify(a, largest);
  }
}

function verifyMaxHeap(a) {
  const heapSize = a.length;
  const lastNonLeafIndex = Math.floor(heapSize / 2) - 1; // minus 1 for zero-based array
  let i = 0, j, l, r, isValid = true;

  while(i <= lastNonLeafIndex) {
    l = i * 2 + 1;
    r = l + 1;
    if(l < heapSize && a[l] >= a[i]) {
      isValid = false;
      log(`verifyMaxHeap: array is not a Max Heap @ parent(${i}:${a[i]}), left(${l}:${a[l]})`);
      break;
    }
    if(r < heapSize && a[r] > a[i]) {
      isValid = false;
      log(`verifyMaxHeap: array is not a Max Heap @ parent(${i}:${a[i]}), right(${r}:${a[r]})`);
      break;
    }
    i++;
  }
  if(isValid) {
    log('verifyMaxHeap: array is a Max Heap.');
  }
}

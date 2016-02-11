import {log, generateRandomIntegers} from '../utils';
import {swap} from '../algorithms/sortHelpers';


log('Given an unsorted array of numbers, produce a max heap binary tree.')
let unsorted = generateRandomIntegers(20);
let maxHeap = buildMaxHeap(unsorted.slice());

log('unsorted', unsorted.toString());
verifyMaxHeap(unsorted);
log('sorted', maxHeap.toString());
verifyMaxHeap(maxHeap);

// maxHeapify assumes left and right child of index have the max heap property,
// which is why we start just before the leaves and work our way up.
// leaf nodes are already max heap (no children with larger values)
// First leaf node is always floor(n/2)+1
function buildMaxHeap(a) {
  const heapSize = a.length;
  const lastNonLeafIndex = Math.floor(heapSize / 2) - 1; // minus 1 for zero-based array
  for(let index = lastNonLeafIndex; index >= 0; index--) {
    maxHeapify(a, index);
  }
  return a;
}


// We compare the value for the given node against any child nodes, first left, than right.
// If and when we find a child node containing a larger value, we swap with parent.
// Having received the largest value, the parent now has max heap property (with respect
// to it's children). However, the child node (having received a smaller value) may no
// longer have the max heapify property. We therefore need to recursively call maxHeapify
// on that child node.
function maxHeapify(a, index) {
  const heapSize = a.length;
  const left = index * 2 + 1; // plus one to make math work with zero-based index
  const right = left + 1;
  let maxIndex = index;

  if(left < heapSize && a[left] > a[maxIndex]) {
    maxIndex = left;
  }
  if(right < heapSize && a[right] > a[maxIndex]) {
    maxIndex = right;
  }
  if(maxIndex !== index) {
    swap(a, maxIndex, index);
    maxHeapify(a, maxIndex);
  }
}


function verifyMaxHeap(a) {
  const heapSize = a.length;
  const lastNonLeafIndex = Math.floor(heapSize / 2) - 1; // minus 1 for zero-based array
  let index = 0, left, right, isValid = true;

  while(index <= lastNonLeafIndex) {
    left = index * 2 + 1;
    right = left + 1;
    if(left < heapSize && a[left] >= a[index]) {
      isValid = false;
      log(`verifyMaxHeap: array is not a Max Heap @ parent(${index}:${a[index]}), left(${left}:${a[left]})`);
      break;
    }
    if(right < heapSize && a[right] > a[index]) {
      isValid = false;
      log(`verifyMaxHeap: array is not a Max Heap @ parent(${index}:${a[index]}), right(${right}:${a[right]})`);
      break;
    }
    index++;
  }
  if(isValid) {
    log('verifyMaxHeap: array is a Max Heap.');
  }
}

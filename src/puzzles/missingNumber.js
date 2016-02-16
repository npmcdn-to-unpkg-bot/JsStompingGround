import {log} from '../utils';


// given an unsorted array of consecutive numbers, where one number is missing from the set
// find the missing number
function findMissingNumber(a) {
  let actualSum = 0;
  a.forEach(item=>actualSum+=item);
  const len = a.length + 1; // plus one to account for missing element;
  const expectedSum = len*(len+1)/2;
  return expectedSum - actualSum;
}

const tests = [
  [1,4,3,5,6],
  [5,6,7,8,9,1,2,3,4,10,13,12,14,15],
];

log('missing numbers');
tests.forEach(item=> {
  log(`given ${item.toString()}: ${findMissingNumber(item)}`);
});

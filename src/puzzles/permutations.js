import {log} from '../utils';

// given a string, return array of all permutations
function permutator(input) {
  const a = input.split('');
  let results = [];

  function permute(a, memo) {
    let c;
    memo = memo || [];

    for(let i = 0; i < a.length; i++) {
      c = a.splice(i, 1); // remove an item at index i
      if(a.length === 0) {
        // nothing left to permute
        results.push(memo.concat(c));
      }
      // recursive call w/copy of array and our partial results
      permute(a.slice(), memo.concat(c));
      a.splice(i, 0, c[0]); // put the item back in place
    }
    return results;
  }
  return permute(a);
}

const tests = [
  'abcd',
];

tests.forEach(item=> {
  log(`permutations for ${item.toString()}:`);
  log(permutator(item));
  log('');
});

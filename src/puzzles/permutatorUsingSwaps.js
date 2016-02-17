import {log} from '../utils';

// given a string or array, return all permutations
function permutatorUsingSwaps(input) {
  if(typeof input !== 'string' && !Array.isArray(input)) { throw Error('Permutator requires a string | Array.'); }
  let results = [];
  const a = typeof input === 'string' ? input.split('') : input;

  function permute(j = 0) {
    if(j >= a.length) {
      results.push(a.join(''));
    } else {
      for(let i = j; i < a.length; i++) {
        if(i === j) { // no need to swap on fist iteration
          permute(j + 1);
        } else {
          swap(i, j);
          permute(j + 1);
          swap(i, j);
        }
      }
    }
  }
  function swap(i, j) {
    let t = a[i];
    a[i] = a[j];
    a[j] = t;
  }
  permute();
  return results;
}

const tests = [
  '',
  'a',
  'ab',
  'abc',
  ['billy ', 'joe ', 'jim ', 'bob '],
];

tests.forEach(test=>{
  log(`permutations for [${test}]:`);
  log(permutatorUsingSwaps(test));
});

import {log} from '../utils';

// given a string or array, return all permutations
function permutatorUsingSplice(input) {
  if(typeof input !== 'string' && !Array.isArray(input)) { throw Error('Permutator requires a string | Array.'); }
  let results = [];
  const a = typeof input === 'string' ? input.split('') : input;

  function permute(a, memo = '') {
    let i, c;
    if(a.length === 0) {
      results.push(memo); // rock bottom, no chars left to permute
    }
    for(i = 0; i < a.length; i++) {
      c = a.splice(i, 1)[0]; // remove the char at index i
      permute(a.slice(), memo + c);
      a.splice(i, 0, c); // put char back in place
    }
  }
  permute(a);
  return results;
}

const tests = [
  '',
  'a',
  'ab',
  'abc',
  ['billy ', 'joe ', 'jim ', 'bob '],
];

tests.forEach(item => {
  console.log('');
  console.log(`permutations for [${item.toString()}]:`);
  console.log(permutatorUsingSplice(item));
});

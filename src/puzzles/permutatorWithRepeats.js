import {log} from '../utils';


function permutatorWithRepeats(input, size = 3) {
  const apiErr = 'permutatorWithRepeats(string|array, number)';
  if(typeof input !== 'string' && !Array.isArray(input)) { throw Error(apiErr); }
  if(typeof size !== 'number') { throw Error(apiErr)}
  let results = [];
  const a = typeof input === 'string' ? input.split('') : input;

  function permute(memo = []) {
    if(memo.length >= size) {
      results.push(memo);
    } else {
      for(let i = 0; i < a.length; i++) {
        permute(memo + a[i]);
      }
    }
  }

  permute();
  return results;
}


const tests = [
  {
    size: 3,
    list: ['a', 'b', 'c', 'd'],
  },
  {
    size: 4,
    list: [1, 2],
  },
];

tests.forEach(test => {
  log('');
  log(`permutations, of length ${test.size}, using [${test.list}]:`);
  const results = permutatorWithRepeats(test.list, test.size);
  log('total permutations:', results.length);
  log(results.toString());
});

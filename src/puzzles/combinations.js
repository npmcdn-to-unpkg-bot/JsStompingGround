import {log} from '../utils';


function combinator(input, size = 3) {
  if(typeof input !== 'string' && !Array.isArray(input) && typeof size !== 'number') { throw Error('combinator(string|array, number)'); }
  let results = [];
  const a = typeof input === 'string' ? input.split('') : input;
  // let count = 0;
  function combinate(j = 0, memo = '') {
    // let me = ++count;
    if(memo.length >= size) {
      // log(me, '=', memo);
      results.push(memo);
    } else {
      for(let i = j; i < a.length; i++) {
        // log(me, '^', memo + a[i]);
        combinate(i + 1, memo + a[i]);
      }
    }
  }

  combinate();
  return results;
}

const tests = [
  {
    size: 2,
    items: [1, 2, 3, 4, 5, 6],
  },
  {
    size: 4,
    items: ['r', 'g', 'b', 'c', 'm', 'y', 'k'],
  },
];

tests.forEach(test => {
  log('');
  log(`Combinations, of size ${test.size}, for [${test.items.toString()}]:`);
  log(combinator(test.items, test.size));
});

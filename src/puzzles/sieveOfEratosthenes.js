import {log} from '../utils';

// given a number, n, find all primes numbers less than or equal to n, using the
// sieve of eratosthenes algorithm
function findPrimes(input) {
  if(typeof input !== 'number' || input <= 1) { throw Error('The findPrimes function requires a positive number greater than 1.'); }

  // Create a list from 2 to n (i'll cheat a bit, on the front end, and go from zero to n).
  // To begin, all numbers are assumed prime (until proven otherwise by the algorithm)
  let list = Array(input + 1).fill(true);
  log(`begin: ${toPrimeList(list)}`);

  // usual types of refinements can be used here, e.g., upperBounds
  let upperBounds = Math.floor(input /2);
  // i'll skip additional refinements so we get a log that nicely illustrates
  // how the algorithm works
  let i = 2, p = 2, discards = [];
  for(; i < upperBounds; i++) {
    if(!list[i]) {
      log(`${i} already eliminated.`);
      continue;
    }
    while(true) {
      let x = i * p;
      if(x > input) { break; }
      list[x] = false;
      discards.push(x);
      p++;
    }
    log(`${i} is prime! eliminating multiples: ${discards}`);
    p = 2;
    discards = [];
  }
  log(`end: ${toPrimeList(list)}`);

  function toPrimeList(a) {
    return a.reduce((result, item, i) => {
      if(!!item && i >= 2) { // ignore indexes 0 and 1 (fix for my cheating above)
        result.push(i);
      }
      return result;
    }, []);
  }
}

findPrimes(138);

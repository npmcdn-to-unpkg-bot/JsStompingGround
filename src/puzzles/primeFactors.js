import {log} from '../utils';

// given a number, n, find the largest prime factors
function findPrimes1(n) {
  let results = [];
  let count = 0;
  let d = 2;
  while(n > 1) {
    while(n % d === 0) {
      results.push(d);
      count++;
      n /= d;
    }
    count++;
    d = d + 1;
  }
  return {
    results,
    count,
  };
}
function findPrimes2(n) {
  let results = [];
  let count = 0;
  while(n % 2 === 0) {
    results.push(2);
    count++;
    n /= 2;
  }
  let d = 3;
  while(n > 1) {
    while(n % d === 0) {
      results.push(d);
      count++;
      n /= d;
    }
    count++;
    d = d + 2;
  }
  return {
    results,
    count,
  };
}
function findPrimes3(n) {
  let results = [];
  let count = 0;
  while(n % 2 === 0) {
    results.push(2);
    count++;
    n /= 2;
  }
  let d = 3;
  while(n > 1) {
    while(n % d === 0) {
      results.push(d);
      count++;
      n /= d;
    }
    count++;
    d = d + 2;
    if(d * d > n && n > 1) {
      results.push(n);
      break;
    }
  }
  return {
    results,
    count,
  };
}


let tests = [35, 365, 1000, 2365, 29343, 9781];

tests.forEach(test => {
  log(`prime factors of ${test}:`);
  const ret1 = findPrimes1(test);
  const ret2 = findPrimes2(test);
  const ret3 = findPrimes3(test);
  log(`1) count: ${ret1.count}, results: ${ret1.results.toString()}`);
  log(`2) count: ${ret2.count}, results: ${ret2.results.toString()}`);
  log(`3) count: ${ret3.count}, results: ${ret3.results.toString()}`);
});

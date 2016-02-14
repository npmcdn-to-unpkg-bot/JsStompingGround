import {log} from '../utils';

// given n, calculate it's factorial
function factorial(n) {
  if(typeof n !== 'number' || n < 0) return 'Input must be a positive number.'
  if(n === 0 || n === 1) {
    return 1;
  } else {
    return factorial(n - 1) * n;
  }
}
for(let i = 0; i <= 10; i++) {
  log(`factorial of ${i} = ${factorial(i)}`);
}


function loopFactorial(n) {
  if(typeof n !== 'number' || n < 0) return 'Input must be a positive number.'
  if(n === 0) return 1;
  let total = 1;
  for(let i = 1; i <= n; i++) {
    total *= i;
  }
  return total;
}
for(let i = 0; i <= 10; i++) {
  log(`loopFactorial of ${i} = ${factorial(i)}`);
}


let factCache = [1,1];
function memoFactorial(n) {
  if(typeof n !== 'number' || n < 0) return 'Input must be a positive number.'
  if(!!factCache[n]) {
    return factCache[n];
  } else {
    factCache[n] = memoFactorial(n - 1) * n;
    return factCache[n];
  }
}
log(`memoFactorial of 12 = ${memoFactorial(12)}`);
log(`memoFactorial cache = ${factCache.toString()}`);

log('approximate e:', factCache.reduce((sum, item) => {
  sum += 1 / item;
  return sum;
}, 0));

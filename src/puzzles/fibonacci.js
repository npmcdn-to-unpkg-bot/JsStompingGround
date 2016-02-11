import {log} from '../utils';

// given a positive number, n, calculate it's fibonacci value
function fibonacci(n) {
  if(typeof n !== 'number' || n < 0) { throw Error('The fibonacci function requires a positive number.'); }
  if(n === 0 || n === 1) { return 1; }
  return fibonacci(n - 1) + fibonacci(n - 2);
}
for(let i = 0; i <= 10; i++) {
  log(`fibonacci of ${i} = ${fibonacci(i)}`);
}


let fibCache = [1,1];
function memoFibonacci(n) {
  if(typeof n !== 'number' || n < 0) { throw Error('The fibonacci function requires a positive number.'); }
  if(!!fibCache[n]) {
    return fibCache[n];
  }
  fibCache[n] = memoFibonacci(n - 1) + memoFibonacci(n - 2);
  return fibCache[n];
}
log(`memoFibonacci of 10 = ${memoFibonacci(10)}`);
log('fibCache:', fibCache);

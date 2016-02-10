import {log} from '../utils';

// given n, calculate it's factorial


log(`factorial of 0 = ${factorial(0)}`);
log(`factorial of 1 = ${factorial(1)}`);
log(`factorial of 2 = ${factorial(2)}`);
log(`factorial of 3 = ${factorial(3)}`);
log(`factorial of 4 = ${factorial(4)}`);
log(`factorial of 5 = ${factorial(5)}`);
log(`factorial of 6 = ${factorial(6)}`);
log(`factorial of 7 = ${factorial(7)}`);
log(`factorial of 8 = ${factorial(8)}`);
log(`factorial of 9 = ${factorial(9)}`);
log(`factorial of 10 = ${factorial(10)}`);


function factorial(n) {
  if(n === 0 || n === 1) {
    return 1;
  } else {
    return factorial(n - 1) * n;
  }
}

let factCache = [1,1];

log(`memoFactorial of 10 = ${memoFactorial(10)}`);
log(`memoFactorial cache = ${factCache.toString()}`);

function memoFactorial(n) {
  if(!!factCache[n]) {
    return factCache[n];
  } else {
    factCache[n] = memoFactorial(n - 1) * n;
    return factCache[n];
  }
}

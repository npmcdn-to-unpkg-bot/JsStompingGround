import {log} from '../utils';

// prime numbers are only divisible by 1 and themselves
function isPrime(val) {
  if(!isFinite(val) || val <= 2) {
    log(`isPrime checks for positive numbers greater than 2.`);
    return false;
  }

  log(`is ${val} prime?`);
  if(val % 2 === 0) {
    log(`no, ${val} is divisible by 2.`);
    return false;
  }

  const upperBound = Math.floor(Math.sqrt(val));
  for(let i = 3; i <= upperBound; i = i + 2) {
    if(val % i === 0) {
      log(`no, ${val} is divisible by ${i}.`);
      return false;
    }
  }
  log(`yes, ${val} is a prime number.`);
  return true;
}

isPrime(7029);
isPrime(4273);



// first pass (not very efficient)
// function isPrime(val) {
//   if(val <= 2) {
//     log(`isPrime checks for positive numbers greater than 2.`);
//     return false;
//   }
//   log(`is ${val} prime?`);
//   for(let i = 2; i < val; i++) {
//     if(val % i === 0) {
//       log(`no, ${val} is divisible by ${i}.`);
//       return false;
//     }
//   }
//   log(`yes, ${val} is a prime number.`);
//   return true;
// }

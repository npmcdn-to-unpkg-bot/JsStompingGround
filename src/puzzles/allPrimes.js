import {log} from '../utils';

// prime numbers are positive numbers greater than one that are divisible only by 1 and themselves
function isPrime(input) {
  if(typeof input !== 'number' || input <= 1) { throw Error('The isPrime function requires a positive number greater than 1.'); }
  if(input === 2) { return true; }
  if(input % 2 === 0) { return false; }

  let upperBounds = Math.floor(input / 2);
  for(let i = 3; i <= upperBounds; i = i + 2) {
    if(input % i === 0) return false;
  }
  return true;
}
// for(let x = 1; x < 200; x++) {
//   log(`Is ${x} a prime number? ${isPrime(x)}`);
// }


// given a number, n, find all prime numbers less than or equal to n.
function allPrimes(input) {
  if(typeof input !== 'number' || input <= 1) { throw Error('The allPrimes function requires a positive number greater than 1.'); }

  let list = [];
  for(let x = 2; x <= input; x++) {
    if(isPrime(x)) {
      list.push(x);
    };
  }
  return list;
}

let test;

test = 50;
log(`Primes less than or equal to ${test}: ${allPrimes(test)}`)

test = 199;
log(`Primes less than or equal to ${test}: ${allPrimes(test)}`)

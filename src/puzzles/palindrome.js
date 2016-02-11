import {log} from '../utils';

// given a string, s, determine if it's a palindrome
// mixed case and puncuation is allowed.
function isPalindrome(input) {
  if(typeof input !== 'string') { throw Error('The function isPalindrome requires a string.')}

  const mask = /[^a-z]+/g;
  return checkPalindrome(input.toLowerCase().replace(mask, ''));

  function checkPalindrome(input) {
    if(input.length <= 1) return true;
    if(input.length === 2 && input[0] === input[1]) return true;

    let i = 0, j = input.length -1;
    if(input[i] !== input[j]) return false;
    return checkPalindrome(input.slice(1, -1));
  }
}

let test;

test = 'What, the what?!';
log(`Is "${test}" a palindrome? ${isPalindrome(test)}`);

test = 'Race car!';
log(`Is "${test}" a palindrome? ${isPalindrome(test)}`);

test = 'Was it a car or a cat I saw?';
log(`Is "${test}" a palindrome? ${isPalindrome(test)}`);

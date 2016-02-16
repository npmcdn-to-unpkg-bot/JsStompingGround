import {log} from '../utils';

// given a word, determine if it's a palindrome
function isPalindromeWord(input) {
  return input === input.split('').reverse().join('');
}

let testWords = [
  'nope',
  'madam',
  '458854',
];

log('palindrome words');
testWords.forEach(word=>{
  log(`Is "${word}" a palindrome? ${isPalindromePhrase(word)}`);
});
log('');

function isPalindromeWordAlt(input) {
  const len = input.length;
  const half = Math.floor(len / 2);
  for(let i = 0; i < half; i++) {
    if(input[i] !== input[len - i - 1]) {
      return false;
    }
  }
  return true;
}

log('palindrome words: alternate');
testWords.forEach(word=>{
  log(`Is "${word}" a palindrome? ${isPalindromeWordAlt(word)}`);
});
log('');



// given a string, determine if it's a palindrome
// mixed case and puncuation is allowed.
function isPalindromePhrase(input) {
  if(typeof input !== 'string') { throw Error('The function isPalindromePhrase requires a string.')}

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

let testPhrases = [
  'What, the what?!',
  'Race car!',
  'Was it a car or a cat I saw?',
];

log('palindrome phrases');
testPhrases.forEach(phrase=>{
  log(`Is "${phrase}" a palindrome? ${isPalindromePhrase(phrase)}`);
});

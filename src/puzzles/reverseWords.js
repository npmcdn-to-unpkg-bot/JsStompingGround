import {log} from '../utils';

const tests = [
  ' okay ',
  'To whom it may   concern',
  'It was the best of times',
];

function reverseWordsUsingRecursion(input) {
  function reverseWords(input) {
    const indexWithSpace = input.indexOf(' ') + 1;
    if(indexWithSpace) {
      return reverseWords(input.substring(indexWithSpace)) + input.substring(0, indexWithSpace);
    } else {
      return input + ' ';
    }
  }
  return reverseWords(input).trim(); // trim to clean up first (now trailing) space
}

log('')
log('Reverse words using recursion');
tests.forEach(item=>{
  log(`Reversing words "${item}": "${reverseWordsUsingRecursion(item)}"`);
});

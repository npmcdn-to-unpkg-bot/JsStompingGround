import {log} from '../utils';

const tests = [
  'abcde',
  `Who's scruffy looking!?`,
];

// given a string, s, reverse the order of all characters, e.g., 'abcde' => 'edcba'
function reverseLoopUsingStrings(input) {
  let result = '';
  for(let i = input.length - 1; i >= 0; i--) {
    result += input.substring(i, i + 1);
  }
  return result;
}

log('Reverse using a loop and strings');
tests.forEach(item=>{
  log(`Reversing "${item}": ${reverseLoopUsingStrings(item)}`);
});


function reverseUsingArrayShortcuts(input) {
  return Array.prototype.slice.call(input).reverse().join('');
}

log('')
log('Reverse using array shortcuts');
tests.forEach(item=>{
  log(`Reversing "${item}": ${reverseUsingArrayShortcuts(item)}`);
});



function reverseWithRecursion(input) {
  if(input.length === 0) {
    return '';
  } else {
    return reverseWithRecursion(input.substring(1)) + input.charAt(0);
  }
}

log('')
log('Reverse using recursion');
tests.forEach(item=>{
  log(`Reversing "${item}": ${reverseWithRecursion(item)}`);
});

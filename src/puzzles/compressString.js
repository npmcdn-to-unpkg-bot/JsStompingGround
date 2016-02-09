import {log} from '../utils';


// given a string, replace multiple adjacent occurances of any character with
// the character followed by the number of occurances. Case sensitive.
// throws when the input contains a number.

const testA = 'abbbcCCcccdeeeffggggggggggGGgghiiI';
const testB = 'aabbbcCCcccdeeeffggggggggggGGgghiiII';
const testC = 'aaabbbcCCcccdeeeffggggggggggGGgghiiIII';

log(`test A: ${testA} -> ${compress(testA)}`);
log(`test B: ${testB} -> ${compress(testB)}`);
log(`test C: ${testC} -> ${compress(testC)}`);

function compress(input) {
  const numGuard = /[0-9]{1}/;
  let c = '',
      count = 0,
      result = '';

  if(typeof input !== 'string') {
    throw Error('Input must be of type string.');
  }
  if(numGuard.test(input)) {
    throw Error('Input cannot contain numbers.');
  }

  for(let i = 0; i <= input.length; i++) {
    if(i < input.length && input[i] === c) {
      count++;
      continue;
    }
    // output last char based on count
    switch(count) {
        case 0:
            break; // do nothing
        case 1:
            result += c;
            break;
        case 2:
            result += c + c;
            break;
        default:
            result += c + count;
    }
    // reset for new char
    c = input[i];
    count = 1;
  }
  return result;
}

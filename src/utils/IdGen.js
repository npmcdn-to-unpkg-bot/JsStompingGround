import {log} from '../utils';

// 0, o, 1, l omitted (leaving 32 (2^5) symbols, hmmm...)
const DEFAULT_CHARS = [
  'a','b','c','d','e','f','g','h','i','j','k','m','n','p','q','r','s','t','u','v','w','x','y','z',
  '2','3','4','5','6','7','8','9',
];

export function Randomizer(charList) {
  return {
    [Symbol.iterator]() {
      return {
        next: function() {
          return {
            value: charList[Math.floor(Math.random() * charList.length)],
            done: false,
          };
        },
      }
    },
  }
}

export function newId(size = 20, chars = DEFAULT_CHARS) {
  if(typeof size !== 'number' || size < 1) { throw Error('size must be a positive number.'); }
  if(typeof chars !== 'string' && !Array.isArray(chars)) { throw Error('chars must be a string or char array.'); }

  let result = '';
  const charList = typeof chars === 'string' ? chars.split('') : chars;
  const it = new Randomizer(charList)[Symbol.iterator]();

  while(result.length <= size) {
    result += it.next().value;
  }
  return result;
}


export default {
  newId,
}

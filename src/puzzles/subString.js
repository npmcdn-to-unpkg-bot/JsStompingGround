import {log} from '../utils';


// given a string, toSearch, and a substring, toFind, determine the index at which toFind is contained
// within toSearch
function findSubString(toSearch, toFind) {
  const sLen = toSearch.length;
  const fLen = toFind.length;

  for(let i = 0; i < sLen; i++) {
    if(toSearch[i] === toFind[0]) {
      if(toSearch.slice(i, i + fLen) === toFind) { return i; }
    }
  }
  return -1;
}

const tests = [
  ['How about those Mets?', 'Braves'],
  ['How about those Mets?', 'Mets'],
  ['I like my styles sassy', 'sy'],
];

log('find substring (slice)');
tests.forEach(item=>{
  log(`find "${item[1]}" in "${item[0]}": ${findSubString(item[0], item[1])}`);
});



function findSubStringAlternate(toSearch, toFind) {
  const sLen = toSearch.length;
  const fLen = toFind.length;
  let fIndex = 0;

  for(let i = 0; i < sLen; i++) {
    if(toSearch[i] === toFind[fIndex]) {
      fIndex++;
    } else if(toSearch[i] === toFind[0]) {
      fIndex = 1;
    } else {
      fIndex = 0;
    }

    if(fIndex === fLen) {
      return i + 1 - fLen; // plus one because we're still on the last letter of the matched string
    }
  }
  return -1;
}

log('');
log('find substring alternate (pointers)');
tests.forEach(item=>{
  log(`find "${item[1]}" in "${item[0]}": ${findSubStringAlternate(item[0], item[1])}`);
});

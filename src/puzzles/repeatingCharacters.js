import {log} from '../utils';

// given a string, s, find all repeating characters, e.g., 'abccdba' would match 'c' as repeating
function findRepeatingCharacters(input) {
  const regex = /([^])(?=\1)/g;
  return input.match(regex);
}

let tests = [
  'abccdba',
  'aabcdeffg hhiiiiiijjk',
  `This is looking pretty sweet!`,
];

tests.forEach(item => {
  log(`Repeating characters for "${item}": ${findRepeatingCharacters(item)}`);
});


function stripRepeatingCharacters(input) {
  const regex = /([^])(?=\1)/g;
  return input.replace(regex, '');
}

tests.forEach(item => {
  log(`Stripping repeating characters for "${item}": ${stripRepeatingCharacters(item)}`);
})

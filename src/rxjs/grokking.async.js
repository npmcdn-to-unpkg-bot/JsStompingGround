import {Observable} from 'rxjs';
import {log} from '../utils';

const alpha = 'abcdefghijklmnopqrstuvwxyz'.split('');
function getNumAsync() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(Math.floor(Math.random() * 26 + 1)), 100);
  });
}
function getLetterAsync(num) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(alpha[num - 1]), 1000);
  });
}

// getNumAsync()
//   .then(log('vanilla promise start'))
//   .then(num => {
//     log(num);
//     return num
//   })
//   .then(num => getLetterAsync(num))
//   .then(log)
//   .then(() => log('vanilla promise end'));


var num$ = Observable.fromPromise(getNumAsync())
num$.subscribe(num => log('num via rx:', num, typeof num));
num$.flatMap(num => Observable
  .fromPromise(getLetterAsync(num))
).subscribe(letter => log('letter via rx: ', letter, typeof letter));

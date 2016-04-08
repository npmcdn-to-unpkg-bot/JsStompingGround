import {Observable} from 'rxjs';
import {log} from '../utils';

const alpha = 'abcdefghijklmnopqrstuvwxyz'.split('');

// let num$ = Observable.interval(200).take(20);
let letter$ = Observable.interval(100).take(52).map(x => alpha[x % 26]);

// let output$ = Observable.merge(letter$).throttleTime(200);
let output1$ = Observable.merge(letter$).throttleTime(200);
let output2$ = Observable.merge(letter$).throttleTime(300);

let out$ = Observable.merge(output1$, output2$);

// output1$.subscribe((x) => log('1:', x));
// output2$.subscribe((x) => log('2:', x));
out$.subscribe((x) => log('0:', x));


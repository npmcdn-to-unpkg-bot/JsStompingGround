import {Observable} from 'rxjs';
import {log} from '../utils';


const alpha = 'abcdefghijklmnopqrstuvwxyz'.split('');

let ob1 = Observable
  .interval(100)
  .map(x => alpha[x % 26])
  // .share()
  .take(26);


let sub1, sub2;
setTimeout(() => sub1 = ob1.subscribe((x) => log('1:' + x), null, () => log('completed')), 0);
setTimeout(() => sub2 = ob1.subscribe((x) => log('2:' + x), null, () => log('completed')), 2000);

import {Observable} from 'rxjs';
import {log} from '../utils';

const alpha = 'abcdefghijklmnopqrstuvwxyz'.split('');
let ob1 = Observable.create(observer => {
  let i = 0;
  let cancel = setInterval(() => {
    observer.next(alpha[i++ % 26]);
  }, 1000);

  return () => {
    clearInterval(cancel);
    console.log('unsubscribed');
  }
});

let sub;

sub = ob1.subscribe(log);
setTimeout(() => sub.unsubscribe(), 5000);
setTimeout(() => sub = ob1.subscribe(log), 8000);
setTimeout(() => sub.unsubscribe(), 15000);

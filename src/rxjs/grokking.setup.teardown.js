import {Observable} from 'rxjs';
import {log} from '../utils';


const alpha = 'abcdefghijklmnopqrstuvwxyz'.split('');

// let ob1 = Observable.interval(1000).map(x => alpha[x % 26]);
let ob1 = Observable.create(observer => {
  let i = 0;

  log('setup');
  let cancel = setInterval(() => {
    observer.next(alpha[i++ % 26]);
  }, 1000);

  return () => {
    clearInterval(cancel);
    log('tear down');
  }
});


let sub1, sub2;
sub1 = ob1.subscribe(
  log,
  null,
  () => log('unsubscribed')
);
setTimeout(() => sub2 = ob1.subscribe(log), 2000);
setTimeout(() => sub1.unsubscribe(), 5000);
setTimeout(() => sub2.unsubscribe(), 15000);

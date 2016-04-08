import {Observable} from 'rxjs';
import {log} from '../utils';


const alpha = 'abcdefghijklmnopqrstuvwxyz'.split('');

let alpha$ = Observable.fromArray(alpha);

// elements travel, one at a time, through the whole chain of
// operators
alpha$
  .do(log)
  .take(3)
  .map(e => e.toUpperCase())
  .do(log)
  .map(e => e + e)
  .do(log)
  .map(e => e.toLowerCase())
  .do(log)
  .subscribe();

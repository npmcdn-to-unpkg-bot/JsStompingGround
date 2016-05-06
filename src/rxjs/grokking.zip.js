import {Observable} from 'rxjs';
import {log} from '../utils';

let range$ = Observable.range(0, 5);
let async$ = Observable.interval(1000);

range$.zip(async$, range$.skip(2)).subscribe(
  (x) => log(x),
  (err) => log('err:', err),
  () => log('complete')
);

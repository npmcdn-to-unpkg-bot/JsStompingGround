import {Observable} from 'rxjs';
import {log} from '../utils';

let range$ = Observable.range(0, 5);
let async$ = Observable.interval(1000);

let c = Observable.zip(range$, async$, range$.skip(2));

c.subscribe(
  (x) => log(x),
  (err) => log('err:', err),
  () => log('complete')
);

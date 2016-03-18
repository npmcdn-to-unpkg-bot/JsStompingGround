import {Observable, Subject} from 'rxjs';
import {log} from '../utils';


let sub = new Subject();
let upper = sub.map(item => item.toUpperCase())
let lower = sub.map(item => item.toLowerCase())

Observable
  .merge(sub, upper, lower)
  .subscribe(item => log(item));

sub.next('oNe');
sub.next('TwO');
sub.next('thRee');
sub.complete();
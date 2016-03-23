import {Observable} from 'rxjs';
import {log} from '../utils';


function getItems(input) {
  let i = 1;
  const mockSet1 = new Array(1).fill(`set.${input}.${i++}`);
  const mockSet2 = new Array(2).fill(`set.${input}.${i++}`);
  const mockSet3 = new Array(3).fill(`set.${input}.${i++}`);

  return Observable.create(function(o) {
    o.next(mockSet1);
    o.next(mockSet2);
    o.next(mockSet3);
    o.complete();
  });
}

// projects items as they were put onto the bus
// in this case and array, ex. [item, item, item]
getItems('1').subscribe(log);
log();

// works, but nested subscribe is ugly
getItems('2').subscribe(res => Observable.from(res).subscribe(log));
log();

getItems('3')
  .flatMap(res => Observable.from(res))
  .subscribe(log);

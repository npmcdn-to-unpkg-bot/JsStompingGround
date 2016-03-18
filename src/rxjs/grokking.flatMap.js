import {Observable} from 'rxjs';
import {log} from '../utils';


function getStringsMock(input) {
  const mockSet1 = [`one-${input}`, `two-${input}`, `three-${input}`];
  const mockSet2 = [`four-${input}`, `five-${input}`, `six-${input}`];
  const mockSet3 = [`seven-${input}`, `eight-${input}`, `nine-${input}`];
  
  return Observable.create(function(o) {
    o.next(mockSet1);
    o.next(mockSet2);
    o.next(mockSet3);
    o.complete();
  });
}

// => [item, item, item]
getStringsMock('1').subscribe(res => {
  log(res);
  log();
});

// works, but nested subscribe is ugly
getStringsMock('2').subscribe(res => {
  Observable.from(res).subscribe(url => log(url));
  log();
});

getStringsMock('3')
.flatMap(res => {
  log();
  return Observable.from(res)
})
.subscribe(res => log(res));
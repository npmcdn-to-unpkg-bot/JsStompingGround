import {Observable} from 'rxjs';

function myfunc(val) {
  console.log(val);
}

var o = Observable.create(function(observable) {
  observable.next('one');
  observable.next('two');
  observable.next('three');
  setTimeout(() => observable.next('four'), 1000);
});



o.subscribe(myfunc);


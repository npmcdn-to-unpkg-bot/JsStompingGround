import {Observable} from 'rxjs';
// function getNumStream(): Observable<number> {
//   let subject = new Subject();
//   var cancel = setInterval(() => subject.next(Math.floor(Math.random() * 100)), 1000);
//   subject.subscribe(
//     null,
//     null,
//     () => {
//       clearInterval(cancel);
//       console.log('clearInterval called');
//     } 
//   );
//   return subject;
// }

function getNumStream() {
    return Observable.create(function (observer) {
        console.log('create');
        var cancel = setInterval(function () { return observer.next(Math.floor(Math.random() * 100)); }, 100);
        return function () {
            console.log('dispose');
            clearInterval(cancel);
        };
    });
}
var num$ = getNumStream();

num$.subscribe(res=>console.log(res));
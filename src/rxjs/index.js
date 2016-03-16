
let $result = document.getElementById('result');

// test 3

let req$ = Rx.Observable.of('https://api.github.com/users');

let res$ = req$.flatMap(url => {
  return Rx.Observable.fromPromise(
    fetch(url).then(res => res.json())
  );
});

res$.subscribe(res => $result.innerHTML = res.map(e => `<img src='${e.avatar_url}' />`));


// test 2

// let req$ = Rx.Observable.of('https://api.github.com/users');
// req$.subscribe(function(url) {
//   var res$ = Rx.Observable.create(function(observer) {
//     fetch(url)
//       .then(res => res.json())
//       .then(res => observer.next(res))
//       .catch(err => observer.error(err));

//     return function () {
//         observer.completed();
//     };
//   });
//   res$.subscribe(res => $result.innerText = JSON.stringify(res));
// });




// test 1

// var source = new Rx.Subject();
// var i = 0;
// var cancel = setInterval(function() {
//   source.next(i++);
// }, 1000);

// var o = source
//   .asObservable()
//   .filter(x => x % 3 === 0);
  
  
// o.subscribe(res => $result.innerText = JSON.stringify(res));


let lastUserId = 0;
let userIndex = 0;
let next = document.getElementById('next');
let jump = document.getElementById('jump');
let user = document.getElementById('user');

let nextClick$ = Rx.Observable.fromEvent(next, 'click');
let jumpClick$ = Rx.Observable.fromEvent(jump, 'click');
let controller = new Rx.Subject();

let req$ = jumpClick$
  .startWith('startup click')
  .map(() => 'https://api.github.com/users?since=' + lastUserId);
let res$ = req$.flatMap(url => Rx.Observable.fromPromise(
  fetch(url).then(res => res.json())
).flatMap(e => e)).zip(controller, (x, _) => x);

res$.subscribe(
  res => {
    user.innerHTML = `<img src='${res.avatar_url}' />`;
    lastUserId = res.id;
    if(++userIndex % 30 === 0) { jump.click(); }
  }
);
nextClick$.subscribe(e => controller.next());




// let num$ = Rx.Observable.fromPromise(getItems()).flatMap(e=>e).zip(controller, (x, _) => x);
// let num$ = Rx.Observable.range(0, 100).zip(controller, (x, _) => x);
// num$.subscribe(x => console.log(x));
// nextClick$.subscribe(e => controller.next());

// function getItems() {
//   return Promise.resolve([0,1,2,3,4,5,6,7,8,9]);
//}
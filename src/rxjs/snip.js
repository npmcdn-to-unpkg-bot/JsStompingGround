/*
 * Observable
 */

var xs = Rx.Observable.range(0, 3)
xs.subscribe(log)
//=> 0
//=> 1
//=> 2


/*
 * Observer 
 */

var o = Rx.Observer.create(logWith('Value:'), log, logWith('Completed'))
o.onNext(1)
//=> Value: 1
o.onCompleted() // stops the stream
//=> Completed
o.onNext(2)
// no output

var o = Rx.Observer.create(logWith('Value:'), log, logWith('Completed'))
o.onNext(1)
//=> Value: 1
o.onNext(2)
//=> Value: 2
o.onError(new Error('Yikes!')) // stops the stream
//=> Error: Yikes!
o.onNext(3)
// no output



/*
 * Subject
 *
 * Represents an object that is both an observable sequence as well as an observer
 */

var xs = new Rx.Subject()
xs.onNext(1)
// nobody cares to listen yet, no output
xs.subscribe(logAllObserver('Subject'))
xs.onNext(2)
//=> Subject - Value: 2
xs.onError(new Error('Boo')) // stops the stream
//=> Subject - Error: Boo


/*
 * ReplaySubject
 *
 * Subject that remembers N last values that are broadcast to all future observers
 */

var xs = new Rx.ReplaySubject(1)
xs.onNext('pick me')
xs.subscribe(logAllObserver('ReplaySubject'))
//=> ReplaySubject - Value: pick me

var xs = new Rx.ReplaySubject(2)
xs.onNext('first')
xs.onNext('second')
xs.onNext('third')
xs.subscribe(logAllObserver('ReplaySubject'))
//=> ReplaySubject - Value: second
//=> ReplaySubject - Value: third


/*
 * BehaviorSubject
 *
 * Subject that remembers the last (or initial) value
 */

var xs = new Rx.BehaviorSubject()
xs.subscribe(logAllObserver('BehaviorSubject'))
//=> BehaviorSubject - Value: undefined

var xs = new Rx.BehaviorSubject('default')
xs.subscribe(logAllObserver('BehaviorSubject'))
//=> BehaviorSubject - Value: default

var xs = new Rx.BehaviorSubject('default')
xs.onNext('new one')
xs.subscribe(logAllObserver('BehaviorSubject'))
//=> BehaviorSubject - Value: new one


/*
 * Multicast
 *
 * Problem: the values that the observables produce are calculated again for
 * every subscriber (observer) for that observable. This is bad especially if
 * costly operations like HTTP requests are involved in the calculation.
 * (TODO Explain why this is the way it is?)
 *
 * Solution: multicast to the rescue. As the name implies, it takes a value and
 * then sends it to multiple receivers (in this case: observers).
 */

// The problem:
var xs = new Rx.Observable(veryExpensiveValueCalculator)
xs.subscribe(ignoreMe)
//=> Gnaah, calculating value... Count: 1
xs.subscribe(ignoreMe)
//=> Gnaah, calculating value... Count: 2

// The solution:
var mxs = xs.multicast(new Rx.Subject())
mxs.connect() // need this to connect the source with the output, else no values
//=> Gnaah, calculating value... Count: 3
mxs.subscribe(ignoreMe)
mxs.subscribe(ignoreMe)

// ...and the very same with publish helper:
var mxs = xs.publish()
mxs.connect()
//=> Gnaah, calculating value... Count: 4
mxs.subscribe(ignoreMe)
mxs.subscribe(ignoreMe)


/*
 * Helpers
 */

function log(/*args*/) {
  console.log.apply(console, arguments)
}
function logWith(label) {
  return function(/*args*/) {
    console.log.apply(console, Array.prototype.concat.apply([label], arguments))
  }
}
function logAllObserver(label) {
  return Rx.Observer.create(logWith(label + ' - Value:'), logWith(label + ' - '), logWith(label + ' - Completed'))
}
var veryExpensiveCalculationCount
function veryExpensiveValueCalculator() {
  veryExpensiveCalculationCount = ~~veryExpensiveCalculationCount + 1
  log('Gnaah, calculating value... Count: ' + veryExpensiveCalculationCount)
}
function ignoreMe() {}


/*
 * Resources
 *
 * https://github.com/Reactive-Extensions/RxJS
 * http://stackoverflow.com/questions/4787276/what-do-the-various-isubject-implementations-do-and-when-would-they-be-used
 * http://northhorizon.net/2011/sharing-in-rx
 */
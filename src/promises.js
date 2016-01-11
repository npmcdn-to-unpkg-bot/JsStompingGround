const log = console.log;
const meaningOfLife = 42;

// working through the post 'Promises in wicked detail'
// @ http://www.mattgreer.org/articles/promises-in-wicked-detail/

// consider some async operation handled via callbacks
function fetchMeaningOfLife_v1(cb) {
  setTimeout(cb(meaningOfLife), 1000);
}
fetchMeaningOfLife_v1(value => log('fetchMeaningOfLife_v1: ' + value));
// fetchMeaningOfLife_v1: 42


// conceptually, using promises, we want to go towards this
// doSomething().then(result => doSomethingElse(result))
function fetchMeaningOfLife_v2() {
  return {
    then: (cb) => setTimeout(cb(meaningOfLife), 1000),
  };
}
fetchMeaningOfLife_v2().then(value => log('fetchMeaningOfLife_v2: ' + value));
// fetchMeaningOfLife_v2: 42


// so far, simple syntactic sugar, lets more towards a real promise
// first pass Promise constructor
function Promise_v1(fn) {
  var callback = null;

  this.then = function(cb) {
    callback = cb;
  };

  function resolve(value) {
    callback(value);
  }

  fn(resolve);
}
function fetchMeaningOfLife_v3() {
  return new Promise_v1(function(resolve) {
    resolve(meaningOfLife);
  });
}
try {
  fetchMeaningOfLife_v3().then(value => log('fetchMeaningOfLife_v3: ' + value));
} catch(err) { log(err.message); }
// callback is not a function
// Oops, resolve called before callback is assigned


// second pass with setTimeout hacky
function Promise_v2(fn) {
  var callback = null;

  this.then = function(cb) {
    callback = cb;
  };

  function resolve(value) {
    // setTimeout has pushes the function call to the end of the queue so
    // callback gets assigned first
    setTimeout(function() {
      callback(value);
    }, 0);
  }

  fn(resolve);
}
function fetchMeaningOfLife_v4() {
  return new Promise_v2(function(resolve) {
    resolve(meaningOfLife);
  });
}
fetchMeaningOfLife_v4().then(value => log('fetchMeaningOfLife_v4: ' + value));


// To make the promise work without the hack, we need to track some state.
// Specifically, a promise can be 'pending', 'resolved', or 'rejected'.
// we should also gaurd against resolving against a null callback
function Promise_v3(fn) {
  var state = 'pending';
  var resolvedValue;
  var deferredCallback;

  function handleCallback(callback) {
    if(state === 'pending') {
      deferredCallback = callback;
      return;
    }
    callback(resolvedValue);
  }

  this.then = function(callback) {
    handleCallback(callback);
  };

  function resolve(value) {
    resolvedValue = value;
    state = 'resolved';
    if(deferredCallback) {
      handleCallback(deferredCallback);
    }
  }

  fn(resolve);
}
function fetchMeaningOfLife_v5() {
  return new Promise_v3(function(resolve) {
    resolve(meaningOfLife);
  });
}
fetchMeaningOfLife_v5().then(value => log('fetchMeaningOfLife_v5: ' + value));
// fetchMeaningOfLife_v5: 42
// Note that .then and .resolve work sync or async because we remember
// 'resolvedValue' and 'deferredCallback'


// We don't yet have the ability to chain .then calls because the current return
// value of .then is undefiend
var result = fetchMeaningOfLife_v5().then(()=>{});
log('.then() returns: ', result);
// .then() returns: undefined


// Lets fix that by making .then return another Promise.
function Promise_v4(fn) {
  var state = 'pending';
  var resolvedValue;
  var deferred = null;

  function resolve(value) {
    resolvedValue = value;
    state = 'resolved';
    if(deferred) {
      handle(deferred);
    }
  }

  function handle(handler) {
    if(state === 'pending') {
      deferred = handler;
      return;
    }

    if(!handler.callback) {
      handler.resolve(resolvedValue);
      return;
    }

    var ret = handler.callback(resolvedValue);
    handler.resolve(ret);
  }

  this.then = function(callback) {
    return new Promise(function(resolve) {
      handle({
        callback: callback,
        resolve: resolve,
      });
    });
  };

  fn(resolve);
}
function fetchMeaningOfLife_v6() {
  return new Promise_v4(function(resolve) {
    resolve(meaningOfLife);
  });
}

fetchMeaningOfLife_v6()
  .then(value => {
    log('fetchMeaningOfLife_v6: ' + value);
    return value;
  })
  .then(value => log('confirm: ' + value));

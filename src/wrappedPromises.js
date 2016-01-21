import fetch from 'isomorphic-fetch';


function processStatus(response) {
  if (response.status === 200 || response.status === 0) {
    return Promise.resolve(response)
  } else {
    return Promise.reject(new Error(response.statusText))
  }
};

function parseJson(response) {
  return response.json();
};

function parseHtml(response) {
  return response.text();
};


function getWrappedPromise() {
  let wrappedPromise = {};
  let promise = new Promise(function(resolve, reject) {
    wrappedPromise.reject = reject;
    wrappedPromise.resolve = resolve;
  });
  wrappedPromise.then = promise.then.bind(promise);
  wrappedPromise.catch = promise.catch.bind(promise);
  wrappedPromise.promise = promise;

  return wrappedPromise;
}

function getWrappedFetch() {
  let wrappedPromise = getWrappedPromise();
  let args = Array.prototype.slice.call(arguments);

  fetch.apply(null, args)
    .then(res => wrappedPromise.resolve(res),
          err => wrappedPromise.reject(err))
    .catch(err => wrappedPromise.catch(err));

  return wrappedPromise;
}



function getPage(url) {
  let options = {
    method: 'get',
    headers: {
      'Accept': 'text/html',
    },
  };

  return getWrappedFetch(url, options)
    .then(processStatus)
    .then(parseHtml);
}


getPage('http://google.com')
  .then(res=>console.log('result', res))
  .catch(err=>console.log('error', err));

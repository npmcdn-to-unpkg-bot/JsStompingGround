import {log} from '../utils';

// an object has a dispatch method with the following signature,
// dispatch(action): void => {}
// create a util function that adds middleware(s)

let store = {
  dispatch: function(action) {
    log('noop');
  },
}

let someAction = {
  type: 'SOME_ACTION',
  payload: {
    id: 1,
    first: 'daniel',
    last: 'williams',
  },
}


function applyMiddleware(store, middleware) {
  middleware.slice().reverse().forEach(fn => {
    let next = store.dispatch;
    store.dispatch = (action) => {
      fn(action);
      next(action);
    }
  });
}

function logPayloadId(action) {
  log('id:', action.payload.id);
}
function logActionType(action) {
  log('type:', action.type);
}
function logPayloadName(action) {
  log(`name: ${action.payload.first} ${action.payload.last}`);
}

applyMiddleware(store, [logPayloadId, logActionType]);
applyMiddleware(store, [logPayloadName]);

store.dispatch(someAction);

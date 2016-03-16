import {Map, List, fromJS, toJS} from 'immutable';
import {log} from './utils';

const jsObj = {
  golfers: [
    {
      first: 'daniel',
      last: 'williams',
      rounds: [
        {name: 'day 1', course: 'front', score: 71},
        {name: 'day 2', course: 'back', score:75},
      ],
    },
    {
      first: 'lacey',
      last: 'johnston',
      rounds: [
        {name: 'day 1', course: 'back', score: 70},
        {name: 'day 2', course: 'front', score:72},
      ],
    },
  ],
}

const state01 = fromJS(jsObj);
log('state01:', state01.getIn(['golfers', 0]).toJS());
const state02 = state01.mergeIn(['golfers', 0, 'rounds', 0], {score: 64});
log('state02:', state02.getIn(['golfers', 0]).toJS());
const state03 = state02.setIn(['golfers', 0], state02
  .getIn(['golfers', 0])
  .set('first', 'DJ'));
  // .mergeIn(['golfers', 0, 'rounds', 1], {score: 80});
// log('state03:', state03.toJS());
log('state03:', state03.getIn(['golfers', 0]).toJS());

// correct my score
// log(imObj.setIn(['golfers', 0, 'rounds', 0, 'score'], 64))

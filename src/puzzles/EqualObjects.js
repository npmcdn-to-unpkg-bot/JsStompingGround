import {log} from '../utils';

// given two ojbects, determine if they are equal

const x1 = {first:'Han', last:'Solo'};
const y1 = {first:'Han', last:'Solo'};

log(`comparing ${JSON.stringify(x1)} and ${JSON.stringify(y1)}`)
log('strict comparison: ', x1 === y1);
log('abstract comparison: ', x1 === y1);
log('stringifyEquals:', stringifyEquals(x1, y1));

log('stringifyEquals is fairly limited, consider');
const x2 = {first:'Han', last:'Solo'};
const y2 = {last:'Solo', first:'Han'};
log(`comparing ${JSON.stringify(x2)} and ${JSON.stringify(y2)}`)
log('stringifyEquals:', stringifyEquals(x2, y2));

log('betterEquals:', betterEquals(x2, y2));

const ship1 = {
  name:'Millennium Falcon',
  armament: [
    'Antipersonnel laser cannon',
    'Two quad laser turrets',
    'Concussion missiles',
  ],
  crew: [{
    name: 'Han Solo',
    role: 'Captain',
  },
  {
    name: 'Chewbacca',
    role: 'Co-Pilot',
  }],
}
const ship2 = {
  name:'Millennium Falcon',
  crew: [{
    name: 'Han Solo',
    role: 'Captain',
  },
  {
    name: 'Chewbacca',
    role: 'Co-Pilot',
  }],
  armament: [
    'Antipersonnel laser cannon',
    'Two quad laser turrets',
    'Concussion missiles',
  ],
}

console.log('Something more elaborate');
console.log('comparing ships: ', betterEquals(ship1, ship2));

function stringifyEquals(x, y) {
  return JSON.stringify(x) === JSON.stringify(y);
}

function betterEquals(x, y) {
  // strictly equal? done.
  if(x === y) return true;

  // if not strictly equals, we should be dealing with objects
  // in order to move forward
  if(typeof x !== 'object' || typeof y !== 'object') return false;

  // both objects should have same prototype chain
  if(x.constructor !== y.constructor) return false;

  for(let p in x) {
    // we can skip properties in the prototype chain because we compared constructors
    if(!x.hasOwnProperty(p)) continue;

    // y should have the same properties as x
    if(!y.hasOwnProperty(p)) return false;

    // we need to recursively check for equality
    if(!betterEquals(x[p], y[p])) return false;
  }
  for(let p in y) {
    if(y.hasOwnProperty(p) && !x.hasOwnProperty(p)) return false;
  }
  return true;
}

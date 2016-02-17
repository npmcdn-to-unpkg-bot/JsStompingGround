import {log} from '../utils';


var rebels = [
  {
    name: 'Luke Skywalker',
  },
  {
    name: 'Han Solo',
  },
];
var noAccess = 'noAccess';
var sectionTitle = function sectionTitle(title) {
  log(`\nES6 ${title}`);
}


sectionTitle('Arrows Functions =>');
rebels.map((e, i) => {
        log(i, e, e.name.toUpperCase());
        return e;
    }
);

sectionTitle('Classes');
var o = {
    first:'Han',
    last:'Solo',
    name: function() {
        return first + ' ' + last;
    },
}


sectionTitle('Template Strings');
var first = 'daniel';
log(`hello ${first}`);


sectionTitle('Promises');
function promiseFactory(duration) {
    log('created');
    duration = duration || 0;
    return new Promise(function(resolve, reject) {
        setTimeout(resolve, duration);
    });
}

promiseFactory(1000)
  .then(function() {
    log('promise #1 done');
    return promiseFactory(2000);
  })
  .then(function() {
    log('promise #2 done');
  })
  .catch(function(err) {
    log('Promise Error', err);
  });

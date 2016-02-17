import {log} from '../utils';

// Create a class that is iterable, i.e., each(), next()
class Iterator {
  constructor(items) {
    this.index = 0;
    this.items = items;
  }

  first() {
    this.reset();
    return this.next();
  }
  next() {
    return this.items[this.index++];
  }
  hasNext() {
    return this.index <= this.items.length;
  }
  reset() {
    this.index = 0;
  }
  each(callback) {
    for (let item = this.first(); this.hasNext(); item = this.next()) {
      callback(item);
    }
  }
}

const items = ['one', 2, 'circle', 'square', 'triangle', true, 'Apple Pie'];
const iter = new Iterator(items);

log(`given an array "${items}", implement an iterable`);
iter.each(function(item) {
  log(item);
});

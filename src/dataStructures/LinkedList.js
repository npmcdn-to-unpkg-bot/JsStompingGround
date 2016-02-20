import {log} from '../utils';

export function LinkedList() {
  this.head = null;
}

LinkedList.prototype.add = function(val) {
  let node = {
    value: val,
    next: null,
  };
  if(this.head === null) {
    this.head = node;
  } else {
    let c = this.head; // current
    while(c) {
      if(c.next !== null) {
        c = c.next;
      } else {
        c.next = node;
        break;
      }
    }
  }
};
LinkedList.prototype.delete = function(val) {
  if(this.head === null) { return; }
  let c = this.head; // current
  let p = null; // previous
  if(c.value === val) { // special case (head)
    this.head = c.next;
  } else {
    p = c;
    c = c.next;
    while(c) {
      if(c.value === val) {
        p.next = c.next;
        break;
      } else {
        p = c;
        c = c.next;
      }
    }
  }
}
LinkedList.prototype.reverse = function() {
  if(this.head === null) { return; }
  let c = this.head;
  let p = null;
  let n = null;
  while(c) {
    n = c.next; // save next reference
    c.next = p; // reverse (next reference now points back instead of forward)
    p = c; // increment previous reference
    c = n; // increment current reference
  }
  this.head = p;
};

LinkedList.prototype.toArray = function() {
  let result = [];
  let node = this.head;
  while(node !== null) {
    result.push(node.value);
    node = node.next;
  }
  return result;
};

let ll = new LinkedList();
ll.add(4);
ll.add(8);
ll.add(15);
ll.add(16);
ll.add(23);
ll.add(42);

log(ll.toArray());
ll.reverse();
log(ll.toArray());
ll.delete(42);
log(ll.toArray());
ll.delete(15);
log(ll.toArray());
ll.delete(4);
log(ll.toArray());

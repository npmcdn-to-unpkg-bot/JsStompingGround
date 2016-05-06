

function LinkedList() {
  this.head = null;
}

LinkedList.prototype.add = function(val) {
  var node = {
    val: val,
    next: null,
  }
  if(this.head === null) {
    this.head = node;
  } else {
    var c = this.head;
    while(c) {
      if(c.next === null) {
        c.next = node;
        break;
      } else {
        c = c.next;
      }
    }
  }
}

LinkedList.prototype.delete = function(val) {
  if(this.head === null) { return; }
  if(this.head.val === val) {
    this.head = the.head.next;
  } else {
    var p = this.head;
    var c = p.next;
    while(c) {
      if(c.val === val) {
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
  var p = null;
  var c = this.head;
  var n = null;
  while(c) {
    n = c.next; // stash next
    c.next = p; // set next
    p = c;
    c = n;
  }
  this.head = p;
}

LinkedList.prototype.isCyclic = function() {
  if(this.head === null) { return false; }
  var slow = this.head;
  var fast = this.head;

  while(slow && fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if(slow == fast) {
      return true;
    }
  }
  return false;
}

var test = new LinkedList();
test.add(1);
test.add(2);
test.add(3);
test.add(4);
test.add(5);

// console.log(test.head)
test.head.next.next.next.next.next = test.head.next.next.next;

console.log(test.isCyclic());
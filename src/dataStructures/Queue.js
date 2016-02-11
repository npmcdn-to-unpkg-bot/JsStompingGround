

export default function QueueFactory() {
  let itemCount = 0;
  let head = null;

  function Queue() {}
  Queue.prototype = {
    push: function(item) {
      let newNode = {
        data: item,
        next: null,
      }
      if(head === null) {
        head = newNode;
      } else {
        let node = head;
        while(node.next !== null) {
          node = node.next;
        }
        node.next = newNode;
      }
      itemCount++;
    },
    pop: function() {
      if(head === null) { return null; }
      let node = head;
      head = head.next;
      itemCount--;
      return node.data;
    },
    peek: function() {
      if(head === null) { return null; }
      return head.data;
    },
    toArray: function() {
      let nodeArray = [];
      if(head !== null) {
        let node = head;
        for(let i = 0; i < itemCount; i++) {
          nodeArray[i] = node.data;
          node = node.next;
        }
      }
      return nodeArray;
    },
    clear: function() {
      head = null;
      itemCount = 0;
    },
    contains: function(item) {
      if(head === null) { return false; }
      let node = head;
      while(node !== null) {
        if(node.data === item) {
          return true;
        }
        node = node.next;
      }
      return false;
    },
  }
  Queue.prototype.__defineGetter__('count', function(){
    return itemCount;
  });

  return new Queue();
};

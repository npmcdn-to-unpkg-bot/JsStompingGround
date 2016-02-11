

export default function StackFactory() {
  let itemCount = 0;
  let top = null;

  function Stack() {}
  Stack.prototype = {
    push: function(item) {
      let node = {
        data: item,
        next: top,
      };
      top = node;
      itemCount++;
    },
    pop: function() {
      if(top === null) { return null; }
      let node = top;
      top = top.next;
      itemCount--;
      return node.data;
    },
    peek: function() {
      return top === null
        ? null
        : top.data;
    },
    toArray: function() {
      let nodeArray = [];
      if(top !== null) {
        let node = top,
            i = itemCount;
        while(i) {
          nodeArray[--i] = node.data;
          node = node.next;
        }
      }
      return nodeArray;
    },
    clear: function() {
      top = null;
      itemCount = 0;
    },
    contains: function(item) {
      if(top === null) { return false; }
      let node = top;
      while(node !== null) {
        if(node.data === item) {
          return true;
        }
        node = node.next;
      }
      return false;
    },
  }
  Stack.prototype.__defineGetter__('count', function(){
    return itemCount;
  });

  return new Stack();
};

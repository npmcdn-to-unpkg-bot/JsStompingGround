// a heap is a specialized tree-based data structure that satisfies the heap property

// If A is a parent node of B then the key of node A is ordered with respect to the key of node B
// with the same ordering applying across the heap. A heap can be classified further as either
// a "max heap" or a "min heap".

// Binary tree has the following properties
// The element contained by each node is greater than or equal to the elements of that node's children.
// The tree is a complete or almost complete binary tree.
export default function BinarySearchTreeFactory() {

  function BinarySearchTree() {
    this.root = null;
  }
  BinarySearchTree.prototype = {
    insert: function(item) {
      let newNode = new Node(item);
      if(this.root === null) {
        // tree is empty, newNode becomes root
        this.root = newNode;
      }
      else {
        let node = this.root;
        // walk tree to find correct position
        while(!!node) {
          if(newNode.data < node.data) {
            // look left
            if(node.left === null) {
              node.left = newNode;
              break;
            } else {
              // move left
              node = node.left;
            }
          } else if(newNode.data > node.data) {
            // look right
            if(node.right === null) {
              node.right = newNode;
              break;
            } else {
              // move right
              node = node.right;
            }
          } else {
            // console.warn(`Push "${item}" failed: duplicate values not allowed.`);
            break;
          }
        }
      }
    },
    contains: function(item) {
      let node = this.root;
      while(node !== null) {
        if(item < node.data) {
          // go left
          if(node.left === null) { return false; }
          node = node.left;
        } else if(item > node.data) {
          // go right
          if(node.right === null) { return false; }
          node = node.right;
        } else {
          // equal
          return true;
        }
      }
      return false;
    },


    traverse: function(fn) {
      inOrder(this.root);
      // as in left to right
      function inOrder(node) {
        if(node !== null) {
          // left all the way down
          if(node.left !== null) {
            inOrder(node.left);
          }
          // can't go left any more, perform work on this node
          fn.call(this, node);

          // then look to the right
          if(node.right !== null) {
            inOrder(node.right);
          }
        }
      }
    },
    size: function() {
      let length = 0;
      this.traverse(() => { length++ });
      return length;
    },
    toArray: function() {
      let sorted = [];
      this.traverse((node) => { sorted.push(node.data); });
      return sorted;
    },
    toString: function() {
      return this.toArray().toString();
    },
  };

  function Node(item) {
    this.data = item;
    this.left = null;
    this.right = null;
  }

  return new BinarySearchTree();
}

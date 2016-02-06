// a heap is a specialized tree-based data structure that satisfies the heap property

// If A is a parent node of B then the key of node A is ordered with respect to the key of node B
// with the same ordering applying across the heap. A heap can be classified further as either
// a "max heap" or a "min heap".

// Binary tree has the following properties
// The element contained by each node is greater than or equal to the elements of that node's children.
// The tree is a complete or almost complete binary tree.
// i.e., (filled top down, and left to right, with no empty child nodes)

import {log, generateRandomIntegers} from '../utils';


function BinarySearchTree() {

  function Node(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }

  function BSTFac() {
    this.root = null;
  }

  BSTFac.prototype.push = function(val) {
    if(!this.root) {
      this.root = new Node(val);
      return;
    }

    let newNode = new Node(val);
    let currentNode = this.root;

    while(currentNode) {
      if(newNode.val < currentNode.val) {
        if(currentNode.left === null) {
          currentNode.left = newNode;
          break;
        } else {
          currentNode = currentNode.left;
        }
      } else if(newNode.val > currentNode.val) {
        if(currentNode.right === null) {
          currentNode.right = newNode;
          break;
        } else {
          currentNode = currentNode.right;
        }
      } else {
        console.log('dupe', newNode.val);
        break;
      }
    }
  }
  return new BSTFac();
}

var items = generateRandomIntegers(20);
log('random numbers:', items.toString());

var bst = new BinarySearchTree();
items.forEach(item => {
  bst.push(item);
});

log('binary search tree', bst);



const DEFAULTS = {
  unique: true, // true
}

function AvlTree(options) {
  this.options = Object.assign({}, DEFAULTS, options);
  this.root = null;
}

AvlTree.prototype.insert = function(key, value) {
  let newNode = new Node(key, value, this.options);
  if(this.root === null) {
    this.root = newNode;
    return this.root;
  } else {
    return this.root.insert(newNode);
  }
}
AvlTree.prototype.contains = function(key) {
  return this.root === null ? false : this.root.contains(key);
};

AvlTree.prototype.traverseInOrder = function traverseInOrder(fn) {
  if(this.root !== null) {
    this.root.traverseInOrder(fn);
  }
};
AvlTree.prototype.traversePreOrder = function traversePreOrder(fn) {
  if(this.root !== null) {
    this.root.traversePreOrder(fn);
  }
};
AvlTree.prototype.traversePostOrder = function traversePostOrder(fn) {
  if(this.root !== null) {
    this.root.traversePostOrder(fn);
  }
};

AvlTree.prototype.size = function size() {
  return this.root === null
    ? 0
    : this.root.size();
}
AvlTree.prototype.height = function height() {
  return this.root === null
    ? 0
    : this.root.height;
}

AvlTree.prototype.toArray = function toArray() {
  return this.root === null
    ? []
    : this.root.toArray();
};
AvlTree.prototype.toString = function toString() {
  return this.toArray().toString();
};




function Node(key, value, options) {
  if(typeof key !== 'number' && typeof key !== 'string') { throw Error('key is required to be a number or string.'); }

  this.key = key;
  this.value = value;

  this.parent = null;
  this.left = null;
  this.right = null;

  this.height = 0;

  this.options = options;
}

Node.prototype.insert = function(newNode) {
  if(newNode.key < this.key) {
    if(this.left !== null) {
      return this.left.insert(newNode);
    }
    this.left = newNode;
    newNode.parent = this;
    this.traverseToRoot(this.calcHeight);
    return newNode;
  } else if(newNode.key > this.key) {
    if(this.right !== null) {
      return this.right.insert(newNode);
    }
    this.right = newNode;
    newNode.parent = this;
    this.traverseToRoot(this.calcHeight);
    return newNode;
  } else {
    // duplicate
    if(this.options.unique) {
      console.log(`Insert failed for ${newNode.key}. Duplicate detected.`)
    } else {
      console.log(`Insert failed for ${newNode.key}. Multiple values not yet implemented.`)
    }
    return null;
  }
}
Node.prototype.contains = function(key) {
  if(key < this.key) {
    return this.left === null ? false : this.left.contains(key);
  } else if (key > this.key) {
    return this.right === null ? false : this.right.contains(key);
  } else {
    return true;
  }
}

Node.prototype.traverseToRoot = function traverseToRoot(fn) {
  if(typeof fn !== 'function') { return };
  fn.call(this);
  if(this.parent !== null) {
    traverseToRoot.call(this.parent, fn);
  }
};
Node.prototype.traversePreOrder = function traversePreOrder(fn) {
  fn.call(this);
  if(this.left !== null) { this.left.traversePreOrder(fn); }
  if(this.right !== null) { this.right.traversePreOrder(fn); }
};
Node.prototype.traverseInOrder = function traverseInOrder(fn) {
  if(this.left !== null) { this.left.traverseInOrder(fn); }
  fn.call(this);
  if(this.right !== null) { this.right.traverseInOrder(fn); }
};
Node.prototype.traversePostOrder = function traversePostOrder(fn) {
  if(this.left !== null) { this.left.traversePostOrder(fn); }
  if(this.right !== null) { this.right.traversePostOrder(fn); }
  fn.call(this);
};

Node.prototype.size = function size() {
  let length = 0;
  this.traverseInOrder(() => length++);
  return length;
}
Node.prototype.calcHeight = function calcHeight() {
  if(this === null) { return -1; }
  let lh = calcHeight.call(this.left);
  let rh = calcHeight.call(this.right);
  this.height = Math.max(lh, rh) + 1;
  return this.height;
};

Node.prototype.toArray = function toArray() {
  let a = [];
  this.traverseInOrder(function() {
    a.push({
      key: this.key,
      parent: !!this.parent ? this.parent.key : '-',
      height: this.height,
    });
  });
  return a;
};
Node.prototype.toString = function toString() {
  return this.toArray().toString();
};


export default AvlTree;

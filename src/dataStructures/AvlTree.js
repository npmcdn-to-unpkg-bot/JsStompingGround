

const DEFAULTS = {
  unique: true, // true
}

function AvlTree(options) {
  this.options = Object.assign({}, DEFAULTS, options);
  this.root = null;
}

AvlTree.prototype.insert = function(key, value) {
  let newNode = new Node(key, value, this);
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
AvlTree.prototype.delete = function(key) {
  if(this.root === null) { return false; }
  if(this.root.key === key) {
    return this.deleteIfLeaf() || this.deleteIfSingleChild() || this.deleteIfTwoChildren();
  } else {
    this.root.delete(key);
  }
}

AvlTree.prototype.deleteIfLeaf = function() {
  if(this.root.left !== null || this.root.right !== null) { return false; }
  // console.log(`root with zero children, deleting ${this.key}`);
  this.root === null;
  return true;
}
AvlTree.prototype.deleteIfSingleChild = function() {
  if(this.root.left === null && this.root.right === null) { return false; }
  if(this.root.left !== null && this.root.right !== null) { return false; }
  // console.log(`root with single child, deleting ${this.key}`);
  if(this.root.left !== null) {
    this.root = this.root.left;
  } else {
    this.root = this.root.right;
  }
  this.root.calcHeight();
  return true;
}
AvlTree.prototype.deleteIfTwoChildren = function() {
  if(this.left === null || this.right === null) { return false; }
  // console.log(`root with two children, deleting ${this.key}`);
  console.log('Warn: deleteIfTwoChildren not implemented yet.');
  return false;
}

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
AvlTree.prototype.prettyPrint = function (printData = false, spacing = '') {
  if(this.root === null) {
    console.log('empty tree');
  } else {
    this.root.visualize();
  }
};

AvlTree.prototype.isBst = function() {
  if(this.root === null) { return false; }
  return this.root.isBst();
}



function Node(key, value, context) {
  if(typeof key !== 'number' && typeof key !== 'string') { throw Error('key is required to be a number or string.'); }

  this.key = key;
  this.value = value;

  this.parent = null;
  this.left = null;
  this.right = null;

  this.height = 0;

  this.context = context;
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
    if(this.context.options.unique) {
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
Node.prototype.delete = function(key) {
  if(key < this.key) {
    if(this.left !== null) {
      this.left.delete(key);
    }
  } else if (key > this.key) {
    if(this.right !== null) {
      this.right.delete(key);
    }
  } else {
    if(this.parent === null) { return this.context.delete(key); } // root node special case - tree needs to handle the delete
    return this.deleteIfLeaf() || this.deleteIfSingleChild() || this.deleteIfTwoChildren();
  }
}

Node.prototype.deleteIfLeaf = function() {
  if(this.left !== null || this.right !== null) { return false; }
  console.log(`deleting ${this.key}`);
  console.log(`  leaf`);
  if(this.parent.left === this) {
    this.parent.left = null;
  } else {
    this.parent.right = null;
  }
  this.parent.traverseToRoot(this.parent.calcHeight);
  return true;
}
Node.prototype.deleteIfSingleChild = function() {
  if(this.left !== null && this.right !== null) { return false; }

  let child = this.left || this.right;
  console.log(`deleting ${this.key}`);
  console.log(`  single child(${child.key})`);

  if(this.parent.left === this) {
    this.parent.left = child;
  } else {
    this.parent.right = child;
  }
  child.parent = this.parent;

  this.parent.traverseToRoot(this.parent.calcHeight);
  return true;
}
Node.prototype.deleteIfTwoChildren = function() {
  if(this.left === null || this.right === null) { return false; }
  console.log(`deleting ${this.key}`);
  console.log(`  two children`);
  // TODO: randomly shift left.getMaxDescendant (for balance)
  const shift = this.right.getMinDescendant();
  console.log(`  in order successor(${shift.key})`);
  this.key = shift.key;
  this.data = shift.data;

  if(this === shift.parent) {
    this.right = shift.right;
  } else {
    shift.parent.left = shift.right;
  }
  if(shift.right !== null) {
    shift.right.parent = shift.parent;
  }
  return true;
}

Node.prototype.getMaxDescendant = function() {
  if(this.right !== null) {
    return this.right.getMaxDescendant();
  } else {
    return this;
  }
}
Node.prototype.getMinDescendant = function() {
  if(this.left !== null) {
    return this.left.getMinDescendant();
  } else {
    return this;
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

Node.prototype.spacer = '| ';
Node.prototype.toArray = function toArray() {
  let a = [];
  this.traverseInOrder(function() {
    let count = (this.left !== null ? 1 : 0) + (this.right !== null ? 1 : 0);
    // if(this.left !== null) { count++; }
    // if(this.right !== null) { count++; }
    a.push({
      key: this.key,
      parent: !!this.parent ? this.parent.key : '-',
      height: this.height,
      children: count,
    });
  });
  return a;
};
Node.prototype.toString = function toString() {
  return this.toArray().toString();
};
Node.prototype.prettyPrint = function (printData, spacing = '') {


  let data = printData
    ? ` (${this.data})`
    : '';
  console.log(`${spacing}${this.key}${data}`);

  if (!this.left && !this.right) { return; }

  if (this.left) {
    this.left.prettyPrint(printData, spacing + this.spacer);
  }
  else {
    console.log(`${spacing}${this.spacer}-`);
  }
  if (this.right) {
    this.right.prettyPrint(printData, spacing + this.spacer);
  } else {
    console.log(`${spacing}${this.spacer}-`);
  }
};
Node.prototype.visualize = function(prefix = '') {
  console.log(`${prefix}${this.key}`);
  prefix += this.spacer;
  if(this.left === null && this.right === null) { return; }
  if(this.left !== null) {
    this.left.visualize(prefix);
  } else {
    console.log(`${prefix}-`);
  }
  if(this.right !== null) {
    this.right.visualize(prefix);
  } else {
    console.log(`${prefix}-`);
  }
}


Node.prototype.isBst = function() {
  this.traversePreOrder(function() {
    if(this.left !== null && this.left.key > this.key) {
      throw Error(`BST check failed @ key(${this.key}). Left key(${this.left.key}) is larger.`);
    }
    if(this.right !== null && this.right.key < this.key) {
      throw Error(`BST check failed @ key(${this.key}). Right key(${this.right.key}) is smaller.`);
    }
  });
  this.traversePreOrder(function() {
    if(this.left !== null && this.left.parent !== this) {
      throw Error(`BST check failed @ key(${this.key}). Left key(${this.left.key}) parent pointer is not coherent.`);
    }
    if(this.right !== null && this.right.parent !== this) {
      throw Error(`BST check failed @ key(${this.key}). Right key(${this.left.key}) parent pointer is not coherent.`);
    }
  });
  return true;
}

export default AvlTree;

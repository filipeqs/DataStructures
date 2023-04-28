class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    var newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }
    var current = this.root;
    while (true) {
      if (value === current.value) return undefined;
      if (value < current.value) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        if (current.right === null) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }

  find(value) {
    if (this.root === null) return false;
    var current = this.root,
      found = false;
    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        found = true;
      }
    }
    if (!found) return undefined;
    return current;
  }

  contains(value) {
    if (this.root === null) return false;
    var current = this.root,
      found = false;
    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        return true;
      }
    }
    return false;
  }

  BFS() {
    var node = this.root;
    var result = [];
    var queue = [];

    queue.push(node);
    while (queue.length) {
      node = queue.shift();
      result.push(node);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    return result;
  }

  DFSPreOrder() {
    var result = [];
    var current = this.root;

    function tranverse(node) {
      result.push(node.value);
      if (node.left) tranverse(node.left);
      if (node.right) tranverse(node.right);
    }

    tranverse(current);
    return result;
  }

  DFSPostOrder() {
    var result = [];
    var current = this.root;

    function tranverse(node) {
      if (node.left) tranverse(node.left);
      if (node.right) tranverse(node.right);
      result.push(node.value);
    }

    tranverse(current);
    return result;
  }

  DFSInOrder() {
    var result = [];
    var current = this.root;

    function tranverse(node) {
      if (node.left) tranverse(node.left);
      result.push(node.value);
      if (node.right) tranverse(node.right);
    }

    tranverse(current);
    return result;
  }
}

var tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);
// tree.BFS();
// tree.DFSPreOrder();
// tree.DFSPostOrder();
tree.DFSInOrder();

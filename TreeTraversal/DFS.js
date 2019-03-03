class Node {
  constructor(v) {
    this.value = v;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(v) {
    const newNode = new Node(v);
    if (!this.root) {
      this.root = newNode;
      return this;
    }
    let current = this.root;
    while (true) {
      if (newNode.value === current.value) return undefined;
      if (newNode.value > current.value) {
        if (!current.right) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      } else if (newNode.value < current.value) {
        if (!current.left) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      }
    }
  }

  find(v) {
    if (!this.root) return false;
    let current = this.root;
    while (true) {
      if (current.value === v) return true;
      if (!current.right && !current.left) return false;
      if (v < current.value) {
        if (!current.left) return false;
        current = current.left;
      }
      if (v > current.value) {
        if (!current.right) return false;
        current = current.right;
      }
    }
  }

  BFS() {
    const result = [];
    const queue = [this.root];
    while (queue.length) {
      const current = queue.shift();
      result.push(current.value);
      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }
    return result;
  }

  DFSPreOrder() {
    const result = [];
    const dive = (node) => {
      result.push(node.value);
      if (node.left) dive(node.left);
      if (node.right) dive(node.right);
    };
    dive(this.root);
    return result;
  }

  DFSPostOrder() {
    const result = [];
    const dive = (node) => {
      if (node.left) dive(node.left);
      if (node.right) dive(node.right);
      result.push(node.value);
    };
    dive(this.root);
    return result;
  }

  DFSInOrder() {
    const result = [];
    const dive = (node) => {
      if (node.left) dive(node.left);
      result.push(node.value);
      if (node.right) dive(node.right);
    };
    dive(this.root);
    return result;
  }
}

const tree = new BST();

tree.insert(5);
tree.insert(8);
tree.insert(7);
tree.insert(9);
tree.insert(2);
tree.insert(7);
tree.insert(1);

console.log(tree.DFSPreOrder());
console.log(tree.DFSPostOrder());

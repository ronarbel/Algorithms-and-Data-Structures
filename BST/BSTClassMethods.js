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
}

const tree = new BST();

tree.insert(5);
tree.insert(8);
tree.insert(7);
tree.insert(9);
tree.insert(2);
tree.insert(7);
tree.insert(1);

console.log(tree);

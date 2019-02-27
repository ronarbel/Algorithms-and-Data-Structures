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
      return this.root;
    }
    let current = this.root;
    let set = false;
    while (!set) {
      if (newNode.value > current.value) {
        if (current.right) {
          current = current.right;
        } else {
          current.right = newNode;
          set = true;
          return this.root;
        }
      } else if (newNode.value < current.value) {
        if (current.left) {
          current = current.left;
        } else {
          current.left = newNode;
          set = true;
          return this.root;
        }
      } else {
        return this.root;
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

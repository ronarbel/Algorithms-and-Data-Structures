class Node {
  constructor(v) {
    this.value = v;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.size = 0;
  }

  push(v) {
    const node = new Node(v);
    if (!this.first) {
      this.first = node;
    } else {
      node.next = this.first;
      this.first = node;
    }
    this.size += 1;
    return this.size;
  }

  pop() {
    if (!this.first) return null;
    const result = this.first;
    this.first = this.first.next;
    this.size -= 1;
    return result;
  }
}


const stack1 = new Stack();
console.log(stack1.pop());
console.log(stack1.push(5));
console.log(stack1);
console.log(stack1.pop());
console.log(stack1.pop());

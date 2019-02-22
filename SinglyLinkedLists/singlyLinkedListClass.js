class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const node = new Node(val);
    if (!this.length) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length += 1;
    return this;
  }

  pop() {
    if (!this.head) return undefined;

    let current = this.head;
    while (current.next.next) {
      current = current.next;
    }
    const popped = this.tail;
    this.tail = current;
    this.tail.next = null;
    this.length -= 1;
    if (!this.length) {
      this.head = null;
      this.tail = null;
    }
    return popped;
  }
}

const list = new SinglyLinkedList();
list.push(1);
list.push(2);
list.push(3);
let three = list.pop();


console.log(list);
console.log(three);

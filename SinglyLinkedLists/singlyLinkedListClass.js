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

  shift() {
    if (!this.head) return undefined;
    const oldHead = this.head;
    const newHead = this.head.next || null;
    this.head = newHead;
    this.length -= 1;
    if (!this.length) {
      this.tail = null;
    }

    return oldHead;
  }

  unshift(val) {
    const node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.length += 1;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;
    let counter = 0;
    let current = this.head;
    while (counter !== index) {
      current = current.next;
      counter += 1;
    }
    return current;
  }

  set(index, val) {
    const foundNode = this.get(index);
    if (foundNode) {
      foundNode.value = val;
      return true;
    }
    return false;
  }

  insert(index, val) {
    if (index < 0 || index >= this.length) return false;
    if (index === 0) return !!this.unshift(val);
    if (index === this.length - 1) return !!this.push(val);

    const newNode = new Node(val);
    const prevNode = this.get(index - 1);
    newNode.next = prevNode.next;
    prevNode.next = newNode;
    this.length += 1;
    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    const previousNode = this.get(index - 1);
    const removed = previousNode.next;
    previousNode.next = removed.next;
    this.length -= 1;
    return removed;
  }

  reverse() {
    if (this.length < 2) return this;
    this.tail = this.head;
    let newNext = this.head;
    let current = this.head.next;
    let oldNext = current.next;
    while (oldNext) {
      current.next = newNext;
      newNext = current;
      current = oldNext;
      oldNext = oldNext.next;
    }
    current.next = newNext;
    this.head = current;
    this.tail.next = null;
    return this;
  }
}

const list = new SinglyLinkedList();
// list.push(1);
// list.push(2);
// list.push(3);

console.log(list);
console.log(list.reverse());

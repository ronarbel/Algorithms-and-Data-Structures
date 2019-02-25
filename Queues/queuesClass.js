class Node {
  constructor(v) {
    this.value = v;
    this.next = null;
  }
}
class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(v) {
    const node = new Node(v);
    if (!this.last) {
      this.first = node;
      this.last = node;
    } else {
      this.last.next = node;
      this.last = node;
    }
    this.size += 1;
    return this.size;
  }

  dequeue() {
    if (!this.size) return null;
    const result = this.first;
    if (this.first === this.last) this.last = null;
    this.first = this.first.next;
    this.size -= 1;
    return result;
  }
}

const queue1 = new Queue();
console.log(queue1.dequeue());
console.log(queue1.enqueue(5));
console.log(queue1.enqueue(6));
console.log(queue1);
console.log(queue1.dequeue());
console.log(queue1.dequeue());
console.log(queue1.dequeue());
console.log(queue1.enqueue(7));
console.log(queue1);


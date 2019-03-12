class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(v) {
    this.values.push(v);
    this.bubbleUp();
  }

  bubbleUp() {
    let insertIndex = this.values.length - 1;
    let parentIndex = Math.floor((insertIndex - 1) / 2);
    while (this.values[insertIndex] > this.values[parentIndex]) {
      let tempParent = this.values[parentIndex];
      this.values[parentIndex] = this.values[insertIndex];
      this.values[insertIndex] = tempParent;

      insertIndex = parentIndex;
      parentIndex = Math.floor((insertIndex - 1) / 2);
    }
  }
}

const heap = new MaxBinaryHeap();
heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(55);
heap.insert(18);
heap.insert(55);
heap.insert(33);

console.log(heap);

class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(v) {
    this.values.push(v);
    this.bubbleUp();
  }

  bubbleUp() {
    let insertIdx = this.values.length - 1;
    let parentIdx = Math.floor((insertIdx - 1) / 2);
    while (this.values[insertIdx] > this.values[parentIdx]) {
      let tempParent = this.values[parentIdx];
      this.values[parentIdx] = this.values[insertIdx];
      this.values[insertIdx] = tempParent;

      insertIdx = parentIdx;
      parentIdx = Math.floor((insertIdx - 1) / 2);
    }
  }

  extractMax() {
    const max = this.values[0];
    const end = this.values.pop();
    this.values[0] = end;
    this.bubbleDown();
    return max;
  }

  // REFACTOR left right val check, swap greater child val;
  bubbleDown() {
    let bubbleDownIdx = 0;
    let leftChildIdx = (2 * bubbleDownIdx) + 1;
    let rightChildIdx = (2 * bubbleDownIdx) + 2;

    let bubbleVal = this.values[bubbleDownIdx];
    let leftVal = this.values[leftChildIdx];
    let rightVal = this.values[rightChildIdx];

    while (bubbleVal < leftVal || bubbleVal < rightVal) {
      if (bubbleVal < leftVal) {
        this.values[leftChildIdx] = bubbleVal;
        this.values[bubbleDownIdx] = leftVal;
        bubbleDownIdx = leftChildIdx;
      } else {
        this.values[rightChildIdx] = bubbleVal;
        this.values[bubbleDownIdx] = rightVal;
        bubbleDownIdx = rightChildIdx;
      }
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

const assert = require('assert');

const findIndex = (a, val) => {
  let min = 0;
  let max = a.length - 1;
  while (min <= max) {
    const middle = Math.floor((max + min) / 2);
    if (a[middle] === val) return middle;
    if (a[middle] < val) {
      min = middle + 1;
    } else {
      max = middle - 1;
    }
  }
  return -1;
};

assert.equal(findIndex([1, 2, 3, 4, 5, 6], 4), 3);
assert.equal(findIndex([1, 2, 3, 4, 5, 6], 6), 5);
assert.equal(findIndex([1, 2, 3, 4, 5, 6], 11), -1);

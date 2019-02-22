const assert = require('assert');

// -------- naive solution O(n^2) -------- //
// const sumZero = (a) => {
//   for (let i = 0; i < a.length; i++) {
//     for (let j = i + 1; j < a.length; j++) {
//       if (a[i] + a[j] === 0) {
//         return [a[i], a[j]];
//       }
//     }
//   }
// };

// -------- optimized solution O(n) -------- //
const sumZero = (a) => {
  let left = 0;
  let right = a.length - 1;
  while (left < right) {
    const sum = a[left] + a[right];
    if (sum === 0) {
      return [a[left], a[right]];
    } if (sum < 0) {
      left++;
    } else {
      right--;
    }
  }
};

assert.deepEqual(sumZero([-3, -2, -1, 0, 1, 2, 3]), [-3, 3]);
assert.deepEqual(sumZero([-3, -2, -1, 0, 1, 4]), [-1, 1]);


// -------- increasing pointers solution O(n), O(1) -------- //
const countUniqueValues = (a) => {
  if (a.length === 0) return 0;
  let i = 0;
  for (let j = 1; j < a.length; j++) {
    if (a[i] !== a[j]) {
      i++;
      a[i] = a[j];
    }
  }
  return i + 1;
};

// ------- extra storage solution O(n) -------- //
// const countUniqueValues = (a) => {
//   const uniqueValues = new Set();
//   a.forEach(value => uniqueValues.add(value));
//   return uniqueValues.size;
// };

assert.equal(countUniqueValues([1, 1, 1, 1, 1, 1, 2]), 2);
assert.equal(countUniqueValues([1, 1, 2, 2, 3, 4, 5, 6, 6, 7, 13, 15]), 9);
assert.equal(countUniqueValues([]), 0);
assert.equal(countUniqueValues([-2, -1, -1, 0, 1]), 4);

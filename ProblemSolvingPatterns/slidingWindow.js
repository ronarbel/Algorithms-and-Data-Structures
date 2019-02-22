const assert = require('assert');


// -------- initial solution -------- //
// const maxSubarraySum = (a, n) => {
//   if (n > a.length) return null;
//   let end = n;
//   let maxSum = -Infinity;
//   for (let i = 0; i < a.length; i++) {
//     const subarray = a.slice(i, end);
//     const sum = subarray.reduce((acc, val) => acc + val);
//     if (sum > maxSum) {
//       maxSum = sum;
//     }
//     end++;
//   }
//   return maxSum;
// };


// -------- pure O(n) solution -------- //
const maxSubarraySum = (a, n) => {
  if (a.length < n) return null;
  let maxSum = 0;
  let tempSum = 0;
  for (let i = 0; i < n; i++) {
    maxSum += a[i];
  }
  tempSum = maxSum;
  for (let i = n; i < a.length; i++) {
    tempSum += a[i] - a[i - n];
    maxSum = Math.max(tempSum, maxSum);
  }
  return maxSum;
};

assert.equal(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2), 10);
assert.equal(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4), 17);
assert.equal(maxSubarraySum([4, 2, 1, 6], 1), 6);
assert.equal(maxSubarraySum([4, 2, 1, 6, 2], 4), 13);
assert.equal(maxSubarraySum([], 4), null);

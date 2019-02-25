const assert = require('assert');

// -------- -------- //
const sameFrequency = (a, b) => {
  if (a.length !== b.length) return false;
  const aCounter = {};
  const bCounter = {};
  const aString = a.toString();
  const bString = b.toString();
  for (let i = 0; i < aString.length; i++) {
    const digit = aString[i];
    aCounter[digit] ? (aCounter[digit] += 1) : (aCounter[digit] = 1);
  }
  for (let i = 0; i < bString.length; i++) {
    const digit = bString[i];
    bCounter[digit] ? (bCounter[digit] += 1) : (bCounter[digit] = 1);
  }
  for (const digit in aCounter) {
    if (aCounter[digit] !== bCounter[digit]) return false;
  }
  return true;
};

assert.equal(sameFrequency(281, 821), true);
assert.equal(sameFrequency(34, 14), false);
assert.equal(sameFrequency(22, 222), false);

// -------- frequency counter -------- //
const areThereDuplicates = (...args) => new Set(args).size !== args.length;

assert.equal(areThereDuplicates(1, 2, 3), false);
assert.equal(areThereDuplicates(1, 2, 2), true);
assert.equal(areThereDuplicates('a', 'b', 'c', 'c'), true);


// -------- multiple pointers -------- //
const averagePair = (a, target) => {
  let start = 0;
  let end = a.length - 1;
  while (start < end) {
    const tempAvg = (a[start] + a[end]) / 2;
    if (tempAvg === target) return true;
    if (tempAvg < target) {
      start++;
    } else {
      end--;
    }
  }
  return false;
};

assert.equal(averagePair([1, 2, 3], 2.5), true);
assert.equal(averagePair([-1, 0, 1, 2, 3, 4], 4.1), false);
assert.equal(averagePair([], 4), false);


function isSubsequence(sub, string) {
  let subPointer = 0;
  let stringPointer = 0;
  while (stringPointer <= string.length) {
    if (sub[subPointer] === string[stringPointer]) {
      subPointer++;
      stringPointer++;
    } else {
      stringPointer++;
    }
  }
  console.log(sub, string);
  console.log(subPointer, sub.length);
  return subPointer - 1 === sub.length;
}

// -------- sliding window -------- //
function maxSubarraySum(a, k) {
  if (a.length < k) return null;
  let tempSum = a.slice(0, k).reduce((a, v) => a + v);
  let maxSum = tempSum;
  for (let i = k; i < a.length; i++) {
    tempSum += a[i] - a[i - k];
    maxSum = Math.max(tempSum, maxSum);
  }
  return maxSum;
}


const minSubArrayLen = (a, k) => {
  let window = 1;
  while (window <= a.length) {
    for (let i = 0; i < a.length; i++) {
      const tempSum = a.slice(i, i + window).reduce((a, v) => a + v);
      if (tempSum >= k) return window;
    }
    window += 1;
  }
  return 0;
};


// -------- incomplete -------- //
// failing for 'thisishowwedoit' and 'longestsubstring'
function findLongestSubstring(s) {
  let maxSub = 0;
  for (let i = 0; i < s.length; i++) {
    const seen = new Set();
    for (let j = i; j < s.length; j++) {
      if (!seen.has(s[j])) {
        seen.add(s[j]);
      } else {
        maxSub = Math.max(seen.size, maxSub);
        break;
      }
    }
  }
  console.log(s, maxSub);
  return maxSub;
}

// -------- large to smaller early termination sliding window -------- //
function findLongestSubstring (s) {
  let win = s.length;
  while (win > 0) {
    let start = 0;
    while (start + win <= s.length) {
      const seen = new Set(s.slice(start, start + win));
      if (seen.size === win) {
        return win;
      }
      start += 1;
    }
    win -= 1;
  }
  return 0;
}
var count = function (set, a, b) {
  let res = 0
  while (set.has(a + b)) {
    res++;
    [a, b] = [b, a + b]
  }
  return res
}

/**
 * @param {number[]} A
 * @return {number}
 */
var lenLongestFibSubseq = function (A) {

  const set = new Set(A)
  let max = 0
  for (let i = 0; i < A.length; i++) {
    for (let j = i + 1; j < A.length; j++) {
      const res = count(set, A[i], A[j]) + 2
      if (max < res) {
        max = res
      }
    }
  }
  return max > 2 ? max : 0
};

var assert = require('assert');
assert.equal(lenLongestFibSubseq([1, 2, 3, 4, 5, 6, 7, 8]), 5)
assert.equal(lenLongestFibSubseq([1, 3, 7, 11, 12, 14, 18]), 3)
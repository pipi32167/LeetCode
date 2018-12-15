var swap = function (nums, i, j) {
  const t = nums[i]
  nums[i] = nums[j]
  nums[j] = t
}

/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var flipAndInvertImage = function (A) {

  const m = A.length
  if (m === 0) {
    return A
  }
  const n = A[0].length

  for (let i = 0; i < m; i++) {
    let j = 0,
      k = n - 1
    while (j < k) {
      swap(A[i], j, k)
      A[i][j] = 1 - A[i][j]
      A[i][k] = 1 - A[i][k]
      j++, k--
    }

    if (j === k) {
      A[i][j] = 1 - A[i][j]
    }
  }
  return A
};

var assert = require('assert');
assert.deepEqual(flipAndInvertImage([
  [1, 1, 0],
  [1, 0, 1],
  [0, 0, 0]
]), [
  [1, 0, 0],
  [0, 1, 0],
  [1, 1, 1]
])

var assert = require('assert');
assert.deepEqual(flipAndInvertImage([
  [1, 1, 0, 0],
  [1, 0, 0, 1],
  [0, 1, 1, 1],
  [1, 0, 1, 0]
]), [
  [1, 1, 0, 0],
  [0, 1, 1, 0],
  [0, 0, 0, 1],
  [1, 0, 1, 0]
])
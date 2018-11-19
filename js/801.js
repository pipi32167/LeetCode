var swap = function (A, B, i) {
  const tmp = A[i]
  A[i] = B[i]
  B[i] = tmp
}

/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
var minSwap = function (A, B) {

  let count = 0
  for (let i = 1; i < A.length; i++) {
    if (A[i - 1] >= A[i] || B[i - 1] >= B[i]) {
      if (A[i - 1] < B[i]) {
        swap(A, B, i - 1)
      } else {
        swap(A, B, i)
      }
      count++
    }
  }
  return count
};
var assert = require('assert');
var A = [1, 3, 5, 4]
var B = [1, 2, 3, 7]
assert.equal(minSwap(A, B), 1)
var A = [3, 2, 10, 9]
var B = [1, 5, 8, 11]
assert.equal(minSwap(A, B), 2)
var A = [3, 3, 8, 9, 10]
var B = [1, 7, 4, 6, 8]
assert.equal(minSwap(A, B), 1)
/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var fairCandySwap = function (A, B) {

  const sumA = A.reduce((s, e) => s + e, 0)
  const sumB = B.reduce((s, e) => s + e, 0)
  const diff = (sumA - sumB) / 2
  for (let i = 0; i < A.length; i++) {
    for (let j = 0; j < B.length; j++) {
      if (A[i] - B[j] === diff) {
        return [A[i], B[j]]
      }
    }
  }
};

var assert = require('assert');
var A = [1, 1],
  B = [2, 2],
  R = [1, 2]
assert.deepEqual(fairCandySwap(A, B), R)
var A = [1, 2],
  B = [2, 3],
  R = [1, 2]
assert.deepEqual(fairCandySwap(A, B), R)
var A = [2],
  B = [1, 3],
  R = [2, 3]
assert.deepEqual(fairCandySwap(A, B), R)
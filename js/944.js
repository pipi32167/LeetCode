/**
 * @param {string[]} A
 * @return {number}
 */
var minDeletionSize = function (A) {

  const result = []
  for (let j = 0; j < A[0].length; j++) {
    for (let i = 1; i < A.length; i++) {
      if (A[i - 1].codePointAt(j) > A[i].codePointAt(j)) {
        result.push(j)
        break
      }
    }
  }
  // console.log(result);
  return result.length
};

var assert = require('assert');
var A = ["cba", "daf", "ghi"]
var R = 1
assert.deepEqual(minDeletionSize(A), R)
var A = ["a", "b"]
var R = 0
assert.deepEqual(minDeletionSize(A), R)
var A = ["zyx", "wvu", "tsr"]
var R = 3
assert.deepEqual(minDeletionSize(A), R)
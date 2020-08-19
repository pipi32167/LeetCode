/**
 * @param {number[]} A
 * @return {boolean}
 */
var validMountainArray = function (A) {

  let climb = true
  for (let i = 1; i < A.length; i++) {
    if (climb) {
      if (A[i - 1] === A[i]) {
        return false
      } else if (A[i - 1] > A[i]) {
        if (i === 1) {
          return false
        }
        climb = false
      }
    } else {
      if (A[i - 1] <= A[i]) {
        return false
      }
    }
  }
  return !climb
};

var assert = require('assert');

assert.ok(validMountainArray([0, 3, 2, 1]))
assert.ok(!validMountainArray([2, 1]))
assert.ok(!validMountainArray([3, 5, 5]))
/**
 * @param {number[]} A
 * @return {boolean}
 */
var isMonotonic = function (A) {
  if (A.length < 3) {
    return true
  }
  let flag
  for (let i = 1; i < A.length; i++) {
    if (flag === undefined) {
      if (A[i - 1] !== A[i]) {
        flag = A[i - 1] < A[i]
      }
    } else if (A[i - 1] !== A[i] && flag !== (A[i - 1] < A[i])) {
      return false
    }
  }
  return true
};

var assert = require('assert');
assert.ok(isMonotonic([1, 1, 2, 2, 3]));
assert.ok(isMonotonic([1, 2, 2, 3]));
assert.ok(isMonotonic([6, 5, 4, 4]));
assert.ok(isMonotonic([6, 6, 5, 4, 4]));
assert.ok(!isMonotonic([1, 3, 2]));
assert.ok(isMonotonic([1, 2, 4, 5]));
assert.ok(isMonotonic([1, 1, 1]));
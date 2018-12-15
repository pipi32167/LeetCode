/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
var buddyStrings = function (A, B) {
  if (A.length !== B.length) {
    return false
  }

  let diff = []
  const mapA = new Map
  for (let i = 0; i < A.length; i++) {
    if (A[i] !== B[i]) {
      diff.push(i)
      if (diff.length > 2) {
        return false
      }
    }
    mapA.set(A[i], (mapA.get(A[i]) || 0) + 1)
  }
  if (diff.length === 2) {
    const [i, j] = diff
    return A[i] === B[j] && A[j] === B[i]
  } else if (diff.length === 0) {
    for (const [k, v] of mapA) {
      if (v > 1) {
        return true
      }
    }
    return false
  }
  return false
};

var assert = require('assert');
assert.ok(buddyStrings('ab', 'ba'))
assert.ok(!buddyStrings('ab', 'ab'))
assert.ok(buddyStrings('aa', 'aa'))
var assert = require('assert');
var isEqual = function (A, offset, B) {
  for (let i = 0; i < A.length; i++) {
    const j = (i + offset) % A.length
    if (A[j] !== B[i]) {
      return false
    }
  }
  return true
}
assert.ok(isEqual('abc', 0, 'abc'))
assert.ok(!isEqual('abc', 1, 'abc'))
assert.ok(isEqual('abc', 1, 'bca'))

var indexOf = function (A, idx, B) {

  for (let i = idx; i < A.length; i++) {
    if (A[i] === B) {
      return i
    }
  }
  return -1
}

/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
var rotateString = function (A, B) {

  if (A.length !== B.length) {
    return false
  }
  if (A.length === 0) {
    return true
  }

  let i = -1
  while (true) {

    i = indexOf(A, i + 1, B[0])
    if (i < 0) {
      break
    }
    if (isEqual(A, i, B)) {
      return true
    }
  }

  return false
};

var A = '',
  B = ''
assert.ok(rotateString(A, B))
var A = 'abcde',
  B = 'cdeab'
assert.ok(rotateString(A, B))
var A = 'abcde',
  B = 'abced'
assert.ok(!rotateString(A, B))
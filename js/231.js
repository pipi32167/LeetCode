var isPowerOf = function (n, num) {
  if (n === 1) {
    return true
  } else if (n < 1) {
    return false
  }

  do {
    if (n % num !== 0) {
      return false
    }
    n /= num
  } while (n > 1)

  return true
}

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
  return isPowerOf(n, 2)
};

var assert = require('assert');
assert.ok(isPowerOfTwo(1))
assert.ok(isPowerOfTwo(2))
assert.ok(!isPowerOfTwo(3))
assert.ok(isPowerOfTwo(4))
assert.ok(!isPowerOfTwo(5))
assert.ok(isPowerOfTwo(8))
assert.ok(isPowerOfTwo(16))
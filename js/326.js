var isPowerOf = function (n, num) {
  if (n === 1) {
    return true
  } else if (n < 1) {
    return false
  }

  do {
    n /= num
    if (n !== Math.ceil(n)) {
      return false
    }
  } while (n > 1)

  return true
}

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function (n) {
  return isPowerOf(n, 3)
};


var assert = require('assert');
assert.ok(isPowerOfThree(1))
assert.ok(!isPowerOfThree(2))
assert.ok(isPowerOfThree(3))
assert.ok(!isPowerOfThree(4))
assert.ok(!isPowerOfThree(5))
assert.ok(!isPowerOfThree(8))
assert.ok(isPowerOfThree(9))
assert.ok(!isPowerOfThree(16))
assert.ok(isPowerOfThree(27))
assert.ok(!isPowerOfThree(45))
const num = Math.pow(3, 30)
for (let i = 0; i < 1000000; i++) {
  assert.ok(isPowerOfThree(num))
}
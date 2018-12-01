/**
 * @param {number} num
 * @return {boolean}
 */
var isPowerOfFour = function(num) {
  if (num === 1) {
    return true
  } else if (num < 1) {
    return false
  }

  let count = 0
  for (let i = 0; i < 32; i++) {
    
    if ((num & (1 << i)) > 0) {
      count++
      if (count > 1 || i % 2 !== 0) {
        return false
      }
    }
  }
  return true
};

var assert = require('assert');
assert.ok(isPowerOfFour(1))
assert.ok(!isPowerOfFour(2))
assert.ok(!isPowerOfFour(3))
assert.ok(isPowerOfFour(4))
assert.ok(!isPowerOfFour(5))
assert.ok(!isPowerOfFour(8))
assert.ok(!isPowerOfFour(9))
assert.ok(isPowerOfFour(16))
assert.ok(!isPowerOfFour(27))
assert.ok(!isPowerOfFour(45))
const num = Math.pow(4, 20)
// for (let i = 0; i < 1000000; i++) {
  assert.ok(isPowerOfFour(num))
// }
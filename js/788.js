const validDigits1 = [0, 1, 8]
const validDigits2 = [2, 5, 6, 9]
const invalidDigits = [3, 4, 7]

var isValid = function (num) {
  const nums = num.toString().split('').map(Number)
  let count1 = 0
  let count2 = 0
  for (let i = 0; i < nums.length; i++) {
    if (invalidDigits.indexOf(nums[i]) >= 0) {
      return false
    }

    if (validDigits1.indexOf(nums[i]) >= 0) {
      count1++
    } else {
      count2++
    }
  }
  return count2 > 0
}

/**
 * @param {number} N
 * @return {number}
 */
var rotatedDigits = function (N) {

  let count = 0
  for (let i = 1; i <= N; i++) {
    if (isValid(i)) {
      count++
    }
  }
  return count
};

var assert = require('assert')
assert.equal(rotatedDigits(10), 4)
assert.equal(rotatedDigits(100), 40)
assert.equal(rotatedDigits(1000), 316)
assert.equal(rotatedDigits(10000), 2320)
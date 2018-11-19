
var buildNum2 = function (nums) {
  return ((nums[0] << 1) + nums[1]) << (nums.length - 2)
}

var split = function (num) {
  let result = []
  do {
    result.unshift(num & 1)
    num >>= 1
  } while (num > 0)
  return result
}

/**
 * @param {number} num
 * @return {number}
 */
var findIntegers = function (num, memo = [], memo2 = []) {
  if (num < 0) {
    return 0
  }
  const idx = memo.indexOf(num)
  if (idx >= 0) {
    return memo2[idx]
  }
  if (num < 0b100) {
    let count = 0
    for (let i = 0; i <= num; i++) {
      if (i !== 0b11) {
        count++
      }
    }
    memo.push(num)
    memo2.push(count)
    return count
  }
  const nums = split(num)
  const num2 = buildNum2(nums)
  let count = findIntegers(num2 - 1, memo, memo2)
  if (nums[1] === 0) {
    count += findIntegers(num - num2, memo, memo2)
  }
  memo.push(num)
  memo2.push(count)
  return count
}

var assert = require('assert');

// assert.equal(buildNum2('111'), 0b110)
assert.equal(buildNum2([1, 1, 1]), 0b110)

assert.deepEqual(split(0b111), [1, 1, 1])
assert.deepEqual(split(0b101), [1, 0, 1])
assert.deepEqual(split(0b100), [1, 0, 0])
assert.deepEqual(split(0b110), [1, 1, 0])

assert.equal(findIntegers(0b0), 1)
assert.equal(findIntegers(0b1), 2)
assert.equal(findIntegers(0b10), 3)
assert.equal(findIntegers(0b11), 3)
assert.equal(findIntegers(0b100), 4)
assert.equal(findIntegers(0b101), 5)
assert.equal(findIntegers(0b110), 5)
assert.equal(findIntegers(0b111), 5)
assert.equal(findIntegers(235834), 6765)
assert.equal(findIntegers(425), 89)
assert.equal(findIntegers(0b11011000100), 233)
assert.equal(findIntegers(0b10011000100), 199)
assert.equal(findIntegers(10000000), 103682)
for (let i = 0; i < 10000; i++) {
  assert.equal(findIntegers(Math.pow(10, 9)), 2178309)
}

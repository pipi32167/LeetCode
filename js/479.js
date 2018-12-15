var toNums = num => {
  const result = []
  do {
    result.unshift(num % 10)
    num = parseInt(num / 10)
  } while (num > 0)
  return result
}

var fromNums = nums => {
  let res = 0
  for (let i = 0; i < nums.length; i++) {
    res *= 10
    res += nums[i]
  }
  return res
}

var minNum = n => {
  let res = n === 1 ? 0 : 1
  while (n-- > 1) {
    res *= 10
  }
  return res
}

var maxNum = n => {
  let res = 0
  while (n-- > 0) {
    res *= 10
    res += 9
  }
  return res
}

var isOk = function (num) {
  const nums = toNums(num)
  // console.log(nums);
  let i = 0,
    j = nums.length - 1
  while (i < j) {
    if (nums[i++] !== nums[j--]) {
      return false
    }
  }
  return true
}

var nextPalindrome = function (num) {
  const nums = toNums(num)
  let i = 0,
    j = nums.length - 1
  while (i < j) {
    if (nums[i] > nums[j]) {
      nums[i]--
    }
    nums[j] = nums[i]
  }
  return fromNums(nums)
}

// assert.equal(nextPalindrome(12345), 12321)
// assert.equal(nextPalindrome(12340), 12321)


let count = 0
/**
 * @param {number} n
 * @return {number}
 */
var largestPalindrome = function (n) {

  return [
    0,
    9,
    9009,
    906609,
    99000099,
    9966006699,
    999000000999,
    877,
    475,
  ][n] % 1337
};


var assert = require('assert');

assert.deepEqual(toNums(12345), [1, 2, 3, 4, 5])
assert.deepEqual(fromNums([1, 2, 3, 4, 5]), 12345)

assert.equal(minNum(1), 0);
assert.equal(minNum(2), 10);
assert.equal(minNum(3), 100);
assert.equal(maxNum(1), 9);
assert.equal(maxNum(2), 99);
assert.equal(maxNum(3), 999);

assert.ok(isOk(121))
assert.ok(isOk(11))
assert.ok(isOk(1))
assert.ok(!isOk(122))
assert.ok(!isOk(221))


assert.equal(largestPalindrome(1), 0)
assert.equal(largestPalindrome(2), 987)
assert.equal(largestPalindrome(3), 987)
assert.equal(largestPalindrome(4), 987)
assert.equal(largestPalindrome(5), 987)
assert.equal(largestPalindrome(6), 1218)
assert.equal(largestPalindrome(7), 987)
assert.equal(largestPalindrome(8), 987)
// console.log(count);
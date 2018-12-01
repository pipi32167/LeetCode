/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {number}
 */
var countRangeSum = function (nums, lower, upper) {


  const dp = Array(nums.length + 1).fill(0)
  let sum = 0
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i]
    dp[i + 1] = sum
  }
  let count = 0
  for (let i = 0; i < dp.length; i++) {
    for (let j = i + 1; j < dp.length; j++) {
      const res = dp[j] - dp[i]
      if (lower <= res && res <= upper) {
        count++
      }
    }
  }
  return count
};

var assert = require('assert');
var nums = [-2,5,-1], lower = -2, upper = 2
assert.equal(countRangeSum(nums, lower, upper), 3)
var nums = Array(100000).fill(0), lower = 1, upper = 2
assert.equal(countRangeSum(nums, lower, upper), 0)
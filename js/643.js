/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {

  let sum = 0
  for (let i = 0; i < k - 1; i++) {
    sum += nums[i]
  }
  let max = -Math.pow(2, 31)
  for (let i = k - 1; i < nums.length; i++) {
    sum += nums[i]
    const res = sum / k
    if (max < res) {
      max = res
    }
    console.log({ i, num: nums[i], sum, res });
    
    sum -= nums[i - k + 1]
  }
  return max
};

var assert = require('assert');
var nums = [1, 12, -5, -6, 50, 3],
  k = 4
assert.equal(findMaxAverage(nums, k), 12.75)
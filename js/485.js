/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  let max = 0,
    count = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      count++
      if (max < count) {
        max = count
      }
    } else {
      count = 0
    }
  }
  return max
};

const assert = require('assert');
assert.equal(findMaxConsecutiveOnes([1,1,0,1,1,1]), 3)
assert.equal(findMaxConsecutiveOnes([1,0,1,1,0,1]), 2)
Array.prototype.product = function () {
  return this.reduce((p, e) => p * e, 1)
}

/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function (nums) {

  nums.sort((a, b) => b - a)
  // console.log(nums.slice(0, 3), nums.slice(nums.length - 2).concat(nums[0]));

  return Math.max(
    nums.slice(0, 3).product(),
    nums.slice(nums.length - 2).concat(nums[0]).product(),
  )
};

var assert = require('assert');
assert.equal(maximumProduct([-4, -3, -2, -1, 60]), 720)
assert.equal(maximumProduct([-4, -3, -2, -1, 50, 60]), 720)
assert.equal(maximumProduct([-4, 1, 50, 60]), 3000)
// assert.equal(maximumProduct([-4, 1, 50, 60]), 3000)
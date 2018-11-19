/**
 * @param {number[]} nums
 */
var Solution = function (nums) {

  this._originNums = nums
};

/**
 * Resets the array to its original configuration and return it.
 * @return {number[]}
 */
Solution.prototype.reset = function () {

  return this._originNums
};

/**
 * Returns a random shuffling of the array.
 * @return {number[]}
 */
Solution.prototype.shuffle = function () {

  const nums = this._originNums.slice(0)
  const len = nums.length
  for (let i = 0; i < len; i++) {
    const j = Math.floor(Math.random() * len)
    const tmp = nums[i]
    nums[i] = nums[j]
    nums[j] = tmp
  }
  return nums
};

var _ = require('lodash');
var s = new Solution(_.range(0, 10000000))
s.shuffle()
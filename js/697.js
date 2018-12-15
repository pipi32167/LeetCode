/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function (nums) {

  const map = new Map
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    map.set(num, (map.get(num) || 0) + 1)
  }

  let max = 0, maxRes
  for (const [k, v] of map) {
    if (max < v) {
      max = v
      maxRes = [k]
    } else if (max === v) {
      maxRes.push(k)
    }
  }
  let min = nums.length + 1
  for (let i = 0; i < maxRes.length; i++) {
    const num = maxRes[i]
    const len = nums.lastIndexOf(num) - nums.indexOf(num) + 1
    if (min > len) {
      min = len
    }
  }
  return min
};

var assert = require('assert');
assert.equal(findShortestSubArray([1, 2, 2, 3, 1]), 2)
assert.equal(findShortestSubArray([1, 2, 2, 3, 1, 4, 2]), 6)
assert.equal(findShortestSubArray([1, 1, 1, 2, 2, 3, 4, 2]), 3)
assert.equal(findShortestSubArray(require('./697_input').sample1), 36085)
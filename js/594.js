/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function (nums) {

  const map = new Map()
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i]
    map.set(num, (map.get(num) || 0) + 1)
  }

  let max = 0
  for (const [num, count] of map) {
    const count1 = map.get(num + 1) || 0
    const count2 = map.get(num - 1) || 0
    const count3 = (count1 > count2 ? count1 : count2)
    if (count3 === 0) {
      continue
    }
    res = count + count3
    if (max < res) {
      max = res
    }
  }
  return max
};

var assert = require('assert');
assert.equal(findLHS([1, 1, 1, 1]), 0)
assert.equal(findLHS([1, 3, 2, 2, 5, 2, 3, 7]), 5)
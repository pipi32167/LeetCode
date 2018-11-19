var go = function (nums, hits, idx) {

  if (hits[idx]) {
    return 0
  }

  let i = nums[idx]
  hits[idx] = true
  let len = 1
  while (i !== idx) {
    i = nums[i]
    hits[i] = true
    len++
  }
  return len
}

/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayNesting = function (nums) {

  var hits = new Array(nums.length).fill(false)
  let max = 0
  for (let i = 0; i < nums.length; i++) {
    const len = go(nums, hits, i)
    if (max < len) {
      max = len
    }
  }
  return max
};

var assert = require('assert');
var _ = require('lodash')
assert.equal(arrayNesting([5, 4, 0, 3, 1, 6, 2]), 4);
assert.equal(arrayNesting(_.chain(0).range(20000).shuffle().value()), 9306);
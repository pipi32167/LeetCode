/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves2 = function (nums) {
  const sum = nums.reduce((s, e) => s + e, 0)
  // const avg = Math.round(sum / nums.length)
  // console.log(sum / nums.length, avg, nums.map(e => Math.abs(e - avg)));
  nums.sort((a, b) => a - b)
  let mid
  const midIdx = Math.floor(nums.length / 2)
  if (nums.length % 2 === 0) {
    mid = Math.round((nums[midIdx - 1] + nums[midIdx]) / 2)
  } else {
    mid = nums[midIdx]
  }
  // console.log({
  //   mid,
  //   midIdx
  // });
  return nums.map(e => Math.abs(e - mid)).reduce((s, e) => s + e, 0)
};

var assert = require('assert');
assert.equal(minMoves2([1, 2, 3]), 2)
assert.equal(minMoves2([1, 1, 1]), 0)
assert.equal(minMoves2([1, 5, 9]), 8)
assert.equal(minMoves2([1, 0, 0, 8, 6]), 14)
assert.equal(minMoves2([1, 1, 0, 0, 8, 6]), 14)
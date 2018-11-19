/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function (nums) {
  const nums2 = nums.slice(0).sort((a, b) => a - b)

  let l = 0, u = -1
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== nums2[i]) {
      l = i
      break
    }
  }
  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] !== nums2[i]) {
      u = i
      break
    }
  }
  // console.log({ l, u });
  return u - l + 1
};

var assert = require('assert');
assert.equal(findUnsortedSubarray([1, 2, 3, 4]), 0)
assert.equal(findUnsortedSubarray([]), 0)
assert.equal(findUnsortedSubarray([1]), 0)
assert.equal(findUnsortedSubarray([4, 3, 2, 1]), 4)
assert.equal(findUnsortedSubarray([2, 6, 4, 8, 10, 9, 15]), 5)
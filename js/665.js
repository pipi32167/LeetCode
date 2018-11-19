/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPossibility = function (nums, canCheckMore = true) {

  let count = 0,
    idx
  for (let i = 1; i < nums.length; i++) {
    if (nums[i - 1] > nums[i]) {
      count++;
      idx = i
      if (count > 1) {
        return false
      }
    }
  }

  // console.log({count});
  if (count === 1) {
    if (canCheckMore) {
      const nums1 = nums.slice(0)
      nums1[idx - 1] = nums1[idx]
      if (checkPossibility(nums1, false)) {
        return true
      }
      const nums2 = nums.slice(0)
      nums2[idx] = nums2[idx - 1]
      if (checkPossibility(nums2, false)) {
        return true
      }
    }
    return false
  }
  return true
};

var assert = require('assert')
assert.ok(checkPossibility([4, 2, 3]))
assert.ok(!checkPossibility([4, 2, 1]))
assert.ok(!checkPossibility([3, 4, 2, 3]))
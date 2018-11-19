/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {

  let zeroCount = 0
  for (let i = 0; i < nums.length;) {
    if (nums[i] === 0) {
      zeroCount++
      let j = i + 1
      for (; j < nums.length; j++) {
        if (nums[j] === 0) {
          break
        }
        nums[j - zeroCount] = nums[j]
      }
      i = j
    } else {
      i++
    }
  }
  for (let i = 0; i < zeroCount; i++) {
    nums[nums.length - i - 1] = 0
  }
  return nums
};

var assert = require('assert')
assert.deepEqual(moveZeroes([1, 2, 3, 4, 5]), [1, 2, 3, 4, 5]);
assert.deepEqual(moveZeroes([0, 1, 2, 3, 4, 5]), [1, 2, 3, 4, 5, 0]);
assert.deepEqual(moveZeroes([1, 2, 3, 4, 5, 0]), [1, 2, 3, 4, 5, 0]);
assert.deepEqual(moveZeroes([0, 0, 2, 3, 4, 5]), [2, 3, 4, 5, 0, 0]);
assert.deepEqual(moveZeroes([0, 1, 2, 0, 4, 5]), [1, 2, 4, 5, 0, 0]);
assert.deepEqual(moveZeroes([1, 2, 0, 4, 5, 0]), [1, 2, 4, 5, 0, 0]);
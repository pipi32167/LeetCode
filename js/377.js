/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var solve = function (nums, target, memo) {

  if (target === 0) {
    return 1
  }

  let ans = memo.get(target)
  if (ans !== undefined) {
    return ans
  }

  ans = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > target) {
      break
    }
    ans += solve(nums, target - nums[i], memo)
  }
  memo.set(target, ans)
  return ans
};

var combinationSum4 = function (nums, target) {

  nums.sort((a, b) => a - b)
  const memo = new Map()
  return solve(nums, target, memo)
}

var assert = require('assert');
var nums = [1, 2, 3]
var target = 4
var result = 7
assert.equal(combinationSum4(nums, target), result)
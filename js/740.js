var solve = function (nums, dp, l, u) {
  if (l > u || l < 0 || u >= nums.length) {
    return 0
  }
  if (dp[l][u] !== -1) {
    return dp[l][u]
  }

  let max = 0
  for (let i = l; i <= u; i++) {
    let res = dp[i][i]
    if (i - 1 >= 0) {
      if (nums[i - 1] + 1 === nums[i]) {
        res += solve(nums, dp, l, i - 2)
      } else {
        res += solve(nums, dp, l, i - 1)
      }
    }
    if (i + 1 < nums.length) {
      if (nums[i] + 1 === nums[i + 1]) {
        res += solve(nums, dp, i + 2, u)
      } else {
        res += solve(nums, dp, i + 1, u)
      }
    }

    if (max < res) {
      max = res
    }
  }
  dp[l][u] = max
  return max
}

/**
 * @param {number[]} nums
 * @return {number}
 */
var deleteAndEarn = function (nums) {
  if (nums.length === 0) {
    return 0
  }

  const map = new Map
  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], (map.get(nums[i]) || 0) + 1)
  }
  nums = Array.from(map.keys()).sort((a, b) => a - b)
  const result = []
  let sequence = [0, 0]
  for (let i = 1; i < nums.length; i++) {
    if (nums[sequence[1]] + 1 === nums[i]) {
      sequence[1] = i
    } else {
      result.push(sequence)
      sequence = [i, i]
    }
  }
  result.push(sequence)
  const dp = Array(nums.length).fill(0).map(() => Array(nums.length).fill(-1))
  for (let i = 0; i < nums.length; i++) {
    dp[i][i] = map.get(nums[i]) * nums[i]
  }
  const res = result.reduce((s, e) => s + solve(nums, dp, e[0], e[1]), 0)
  return res
};

var assert = require('assert');
assert.equal(deleteAndEarn([]), 0)
assert.equal(deleteAndEarn([3, 4, 2]), 6)
assert.equal(deleteAndEarn([2, 2, 3, 3, 3, 4]), 9)
assert.equal(deleteAndEarn([8, 7, 3, 8, 1, 4, 10, 10, 10, 2]), 52)
var nums = [12, 32, 93, 17, 100, 72, 40, 71, 37, 92, 58, 34, 29, 78, 11, 84, 77, 90, 92, 35, 12, 5, 27, 92, 91, 23, 65, 91, 85, 14, 42, 28, 80, 85, 38, 71, 62, 82, 66, 3, 33, 33, 55, 60, 48, 78, 63, 11, 20, 51, 78, 42, 37, 21, 100, 13, 60, 57, 91, 53, 49, 15, 45, 19, 51, 2, 96, 22, 32, 2, 46, 62, 58, 11, 29, 6, 74, 38, 70, 97, 4, 22, 76, 19, 1, 90, 63, 55, 64, 44, 90, 51, 36, 16, 65, 95, 64, 59, 53, 93]
assert.equal(deleteAndEarn(nums), 3451)
assert.equal(deleteAndEarn(require('./740_input').sample1), 614005)
// console.log({hit, count, miss: count - hit, rate: hit/count});
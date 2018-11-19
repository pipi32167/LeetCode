var go = function (nums, memo, idx, k, avg, prefix) {
  // console.log(prefix);
  if (prefix.length === k && prefix[0] && prefix[0].remain === 0) {
    return true
  }

  let hit = false
  if (prefix.length === 0 || prefix[0].remain === 0) {
    hit = true
    prefix.unshift({
      remain: avg,
      group: []
    })
    idx = 0
  }

  let now = prefix[0]
  for (let i = idx; i < nums.length; i++) {
    if (memo[i] || nums[i] > now.remain) {
      continue
    }

    memo[i] = true
    now.remain -= nums[i]
    now.group.push(i)
    const res = go(nums, memo, idx + 1, k, avg, prefix)
    if (res) {
      return true
    }
    memo[i] = false
    now.remain += nums[i]
    now.group.pop()
  }
  if (hit) {
    prefix.shift()
  }
  return false
}

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var canPartitionKSubsets = function (nums, k) {

  nums.sort((a, b) => b - a)
  const sum = nums.reduce((s, e) => s + e, 0)
  const avg = sum / k
  if (Math.floor(avg) !== avg) {
    return false
  }
  if (nums[0] > avg) {
    return false
  }

  const memo = nums.map(() => false)
  // console.log({nums, sum, avg});
  return go(nums, memo, 0, k, avg, [])
};

var assert = require('assert');
assert.ok(canPartitionKSubsets([1, 2, 3], 2))
assert.ok(!canPartitionKSubsets([1, 2, 2], 2))
assert.ok(canPartitionKSubsets([4, 3, 2, 3, 5, 2, 1], 4))
assert.ok(canPartitionKSubsets(new Array(1000).fill(0).map((e, idx) => idx), 10))
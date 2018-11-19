var burst = function (nums, memo, l, u) {
  // console.log('burst', {l, u});
  if (l + 1 === u) {
    return 0
  }
  if (memo[l][u] > 0) {
    return memo[l][u]
  }
  let ans = 0
  for (let i = l + 1; i < u; i++) {
    let res = nums[l] * nums[i] * nums[u] + burst(nums, memo, l, i) + burst(nums, memo, i, u)
    ans = Math.max(ans, res)
  }
  memo[l][u] = ans
  return ans
}

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxCoins = function (nums) {
  nums.unshift(1)
  nums.push(1)
  let memo = new Array(nums.length).fill(0).map(() => new Array(nums.length).fill(0))
  const res = burst(nums, memo, 0, nums.length - 1)
  // console.log(memo);
  return res
};

var assert = require('assert');
assert.equal(maxCoins([5]), 5)
assert.equal(maxCoins([3, 8]), 32)
assert.equal(maxCoins([1, 3, 8]), 40)
assert.equal(maxCoins([3, 1, 5, 8]), 167)
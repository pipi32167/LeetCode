var assert = require('assert');
let count = 0
let hit = 0
var isOk = function (nums) {
  for (let i = 1; i < nums.length; i++) {
    if (!(nums[i] % i === 0 ||
        nums.length >= nums[i] && nums[i] % nums[nums[i]] !== 0)) {
      return false
    }
  }
  return true
}

var solve = function (nums, memo, prefix, result) {

  if (prefix.length === nums.length) {
    if (isOk(prefix)) {
      // result.push(prefix.slice(0))
      result.count++
    }
    return
  }

  for (let i = 1; i < nums.length; i++) {
    // count++
    if (memo[i]) {
      // hit++
      continue
    }

    prefix.push(nums[i])
    memo[i] = true
    if (isOk(prefix)) {
      solve(nums, memo, prefix, result)
    }
    prefix.pop()
    memo[i] = false
  }
}


/**
 * @param {number} N
 * @return {number}
 */
var countArrangement = function (N) {

  const nums = Array(N + 1).fill(0).map((e, idx) => idx)
  const memo = Array(N + 1).fill(false)
  const result = {
    count: 0
  }
  solve(nums, memo, [0], result)
  console.log(result);
  return result.count
};


var solve = function (N, nums, dp, l, u) {
  
  if (l >= u) {
    
  }
}

/**
 * @param {number} N
 * @return {number}
 */
var countArrangement = function (N) {

  const nums = new Set(Array(N + 1).fill(0).map((e, idx) => idx))
  const dp = Array(N+1).fill(0).map(() => Array(N+1).fill(-1))
  solve(N, nums, dp, 1, N)
  console.log(result);
  return result.count
};


assert.ok(isOk([0, 1, 2]))
assert.ok(isOk([0, 2, 1]))
assert.equal(countArrangement(2), 2)
assert.equal(countArrangement(13), 4041729)

console.log({ hit, count, rate: hit / count });

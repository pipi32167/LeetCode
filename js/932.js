var isValid = function (result, num) {
  for (let i = 0; i < result.length; i++) {
    for (let j = i + 1; j < result.length; j++) {
      if (result[i] + num === 2 * result[j]) {
        return false
      }
    }
  }
  return true
}

var go = function (N, memo, result) {

  if (result.length === N) {
    return true
  }

  for (let i = 1; i <= N; i++) {
    if (memo[i] || !isValid(result, i)) {
      continue
    }
    result.push(i)
    memo[i] = true
    if (go(N, memo, result)) {
      return true
    }
    memo[i] = false
    result.pop()
  }
  return false
}

/**
 * @param {number} N
 * @return {number[]}
 */
var beautifulArray = function (N) {
  const result = []
  const memo = Array(N + 1).fill(false)
  go(N, memo, result)
  console.log(result);
  return result
};

var isBeautiful = function (nums, l, u) {
  let sum = nums[l] + nums[u]
  for (let i = l + 1; i < u; i++) {
    if (nums[i] * 2 === sum) {
      return false
    }
  }
  return true
}

var isBeautiful2 = function (nums) {

  for (var i = 3; i <= nums.length; i++) {
    for (var j = 0; j <= nums.length - i; j++) {
      // console.log({ i, j, res: isBeautiful(nums, j, j+i-1) });
      if (!isBeautiful(nums, j, j + i - 1)) {
        return false
      }
    }
  }
  return true
}

/**
 * @param {number[]} left
 * @param {number[]} right
 * @return {number[]}
 */
var merge = function (left, right) {

  
}

var go = function (nums) {
  if (nums.length < 3) {
    return nums
  }
  const mid = parseInt(nums.length / 2)
  const left = nums.slice(0, mid)
  const right = nums.slice(mid)
  return go(merge(left, right))
}

/**
 * @param {number} N
 * @return {number[]}
 */
var beautifulArray = function (N) {

  const nums = Array(N).fill(0).map((e, idx) => idx + 1)
  return go(nums)
};

const assert = require('assert');
assert.ok(isBeautiful2(beautifulArray(3)));
assert.ok(isBeautiful2(beautifulArray(4)));
assert.ok(isBeautiful2(beautifulArray(5)));
assert.ok(isBeautiful2(beautifulArray(1000)));
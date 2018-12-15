var isOp = (c) => '+-*'.indexOf(c) >= 0

var OP_FN_MAP = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
}

var solve = function (nums, ops, memo, l, u) {
  if (l >= u) {
    return [nums[l]]
  }
  if (memo[l][u] !== -1) {
    return memo[l][u]
  }
  // console.log({l, u});
  const ans = []
  for (let i = l; i < u; i++) {
    const left = solve(nums, ops, memo, l, i)
    const right = solve(nums, ops, memo, i + 1, u)
    for (const j of left) {
      for (const k of right) {
        ans.push(OP_FN_MAP[ops[i]](j, k))
      }
    }
  }
  memo[l][u] = ans
  return ans
}

/**
 * @param {string} input
 * @return {number[]}
 */
var diffWaysToCompute = function (input) {
  const nums = input.split(/[\+\*-]/g).map(e => Number(e))
  const ops = input.split('').filter(isOp)
  // console.log(nums, ops);
  const memo = Array(nums.length).fill(0).map(() => Array(nums.length).fill(-1))
  return solve(nums, ops, memo, 0, nums.length - 1)
};

var assert = require('assert');
assert.deepEqual(diffWaysToCompute("2-1-1").sort((a, b) => a - b), [0, 2])
assert.deepEqual(diffWaysToCompute("2*3-4*5").sort((a, b) => a - b), [-34, -14, -10, -10, 10])
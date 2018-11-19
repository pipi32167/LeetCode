var go = function (A, L, R, l, u) {
  const isValid = num => L <= num && num <= R
  let dp = new Array(u - l + 1).fill(0)
  let count = 0
  for (let i = u; i >= l; i--) {
    dp[i - l] = A[i]
    count += isValid(dp[i - l]) ? 1 : 0
    for (let j = i + 1; j <= u; j++) {
      dp[j - l] = Math.max(A[j], dp[j - l - 1])
      count += isValid(dp[j - l]) ? 1 : 0
    }
  }
  // console.log({ l, u, count, nums: A.slice(l, u+1) });
  // console.log(dp);
  return count
}

/**
 * @param {number[]} A
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
var numSubarrayBoundedMax = function (A, L, R) {

  const isValid = num => L <= num && num <= R

  let count = 0,
    lastIdx = -1
  for (let i = 0; i < A.length; i++) {
    if (A[i] <= R) {
      if (lastIdx === -1) {
        lastIdx = i
      }
    } else {
      if (lastIdx !== -1) {
        count += go(A, L, R, lastIdx, i - 1)
      }
      lastIdx = -1
    }
  }
  if (lastIdx !== -1) {
    count += go(A, L, R, lastIdx, A.length - 1)
  }
  return count
};


var assert = require('assert');
assert.equal(numSubarrayBoundedMax([2, 1, 4, 3], 2, 3), 3)
assert.equal(numSubarrayBoundedMax([3, 4, 2], 2, 3), 2)
var {
  A,
  L,
  R,
  result
} = require('./795_input').sample1
for (let i = 0; i < 100; i++) {
  assert.equal(numSubarrayBoundedMax(A, L, R), result)
}
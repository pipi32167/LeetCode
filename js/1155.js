const { equal } = require("assert")

const MOD = 10 ** 9 + 7
function solve (D, f, target, d, remain, memo) {
  // console.log({ D, f, d, target });
  const k = d * target + remain
  // const k = d + '|' + remain
  if (memo.has(k)) {
    return memo.get(k)
  }

  if (d === 1) {
    const cnt = remain <= f ? 1 : 0
    memo.set(k, cnt)
    return cnt
  }

  let ans = 0
  for (let i = 1; i <= f; i++) {
    if (i > remain - d + 1) 
    // if(remain - i <= 0)
      break
    ans += solve(D, f, target, d - 1, remain - i, memo)
  }
  ans %= MOD
  // console.log({ k, cnt });
  memo.set(k, ans)
  return ans
}

/**
 * @param {number} d
 * @param {number} f
 * @param {number} target
 * @return {number}
 */
var numRollsToTarget = function(d, f, target) {
  if (d * f < target) {
    return 0
  } else if (d * f === target) {
    return 1
  }
  // console.log('numRollsToTarget', {d, f, target});
  const memo = new Map()
  return solve(d, f, target, d, target, memo)
};

var d = 1, f = 6, target = 3, ret = 1
equal(numRollsToTarget(d, f, target), ret)
var d = 2, f = 6, target = 7, ret = 6
equal(numRollsToTarget(d, f, target), ret)
var d = 2, f = 5, target = 10, ret = 1
equal(numRollsToTarget(d, f, target), ret)
var d = 1, f = 2, target = 3, ret = 0
equal(numRollsToTarget(d, f, target), ret)
var d = 30, f = 30, target = 500, ret = 222616187
equal(numRollsToTarget(d, f, target), ret)
var go = function (N, K, W, sum, result) {

  if (sum >= K) {
    result.count2++
    if (sum <= N) {
      result.count1++
    }
    return
  }

  for (let i = 1; i <= W; i++) {
    go(N, K, W, sum + i, result)
  }
}

/**
 * @param {number} N
 * @param {number} K
 * @param {number} W
 * @return {number}
 */
var new21Game = function (N, K, W) {
  const result = {
    count1: 0,
    count2: 0,
  }
  go(N, K, W, 0, result)
  console.log(result);
  return parseFloat((result.count1 / result.count2).toFixed(5))
};

var assert = require('assert');
var N = 10,
  K = 1,
  W = 10
assert.equal(new21Game(N, K, W), 1)
var N = 6,
  K = 1,
  W = 10
assert.equal(new21Game(N, K, W), 0.6)
var N = 21,
  K = 17,
  W = 10
assert.equal(new21Game(N, K, W), 0.73278)
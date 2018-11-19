// https://leetcode.com/problems/domino-and-tromino-tiling/discuss/116612/Easy-to-understand-O(n)-solution-with-Drawing-Picture-Explanation!

/**
 * @param {number} N
 * @return {number}
 */
var numTilings = function (N) {
  if (N === 0) {
    return 0
  }
  const MOD = Math.pow(10, 9) + 7

  let g = new Array(N + 1).fill(0)
  let u = new Array(N + 1).fill(0)

  g[0] = u[0] = 0
  g[1] = u[1] = 1
  g[2] = u[2] = 2

  for (let i = 3; i <= N; i++) {
    g[i] = (g[i - 1] + g[i - 2] + 2 * u[i - 2]) % MOD
    u[i] = (g[i - 1] + u[i - 1]) % MOD
  }
  return g[N]
};

var assert = require('assert')
assert.equal(numTilings(0), 0);
assert.equal(numTilings(1), 1);
assert.equal(numTilings(2), 2);
assert.equal(numTilings(3), 5);
assert.equal(numTilings(4), 11);
assert.equal(numTilings(5), 24);
assert.equal(numTilings(30), 312342182);
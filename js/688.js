var solve = function (N, K, r, c, memo) {

  if (r < 0 || r >= N || c < 0 || c >= N) {
    return 0
  }
  if (K === 0) {
    return 1
  }
  if (memo[K - 1][r][c] !== -1) {
    return memo[K - 1][r][c]
  }

  const moves = [
    [-2, -1],
    [-2, 1],
    [-1, -2],
    [-1, 2],
    [1, -2],
    [1, 2],
    [2, -1],
    [2, 1],
  ]

  let result = 0
  for (let i = 0; i < moves.length; i++) {
    const [x, y] = moves[i];
    const r2 = r + x
    const c2 = c + y
    result += solve(N, K - 1, r2, c2, memo) / 8
  }

  // console.log({ K, r, c, result });
  memo[K - 1][r][c] = result
  return result
}

/**
 * @param {number} N
 * @param {number} K
 * @param {number} r
 * @param {number} c
 * @return {number}
 */
var knightProbability = function (N, K, r, c) {
  const memo = Array(K).fill(0)
    .map(() => Array(N).fill(0)
      .map(() => Array(N).fill(-1)))
  const res = solve(N, K, r, c, memo)
  // console.log(res);
  return res
};

var assert = require('assert');
assert.equal(knightProbability(2, 2, 0, 0), 0)
assert.equal(knightProbability(3, 1, 0, 0), 0.25)
assert.equal(knightProbability(3, 2, 0, 0), 0.0625)
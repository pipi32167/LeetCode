/**
 * @param {number[]} piles
 * @return {boolean}
 */
var stoneGame = function (piles) {

  let dp = new Array(piles.length + 1).fill(0)
  let sum = 0
  for (let i = 0; i < piles.length; i++) {
    sum += piles[i];
    dp[i + 1] = sum
  }
  let dp2 = new Array(piles.length).fill(0).map(e => new Array(piles.length).fill(0))
  for (let i = piles.length - 1; i >= 0; i--) {
    dp2[i][i] = piles[i]
    for (let j = i + 1; j < piles.length; j++) {
      dp2[i][j] = Math.max(
        piles[i] + (dp[j + 1] - dp[i + 1]) - dp2[i + 1][j],
        piles[j] + (dp[j] - dp[i]) - dp2[i][j - 1]
      )
      // console.log(i, j);
      // console.log(piles[i] + (dp[j + 1] - dp[i + 1]) - dp2[i + 1][j]);
      // console.log(piles[j] + (dp[j] - dp[i]) - dp2[i][j - 1]);
    }
  }
  // console.log(dp2);
  const count = dp2[0][piles.length - 1]
  return count > (sum - count)
};

var assert = require('assert');
assert.ok(stoneGame([5, 3, 4, 5]))
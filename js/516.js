
/**
 * @param {string} s
 * @return {number}
 */
var longestPalindromeSubseq = function (s) {
  let dp = new Array(s.length).fill(0).map(() => new Array(s.length).fill(0))
  for (let i = s.length - 1; i >= 0; i--) {
    dp[i][i] = 1
    for (let j = i + 1; j < s.length; j++) {

      if (s[i] === s[j]) {
        dp[i][j] = dp[i + 1][j - 1] + 2
      } else {
        dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1])
      }
    }
  }
  return dp[0][s.length - 1]
};

var assert = require('assert')
assert.equal(longestPalindromeSubseq('abdcba'), 5)
assert.equal(longestPalindromeSubseq('eabdcebad'), 5)
assert.equal(longestPalindromeSubseq('bbbab'), 4)
assert.equal(longestPalindromeSubseq('cbbd'), 2)
assert.equal(longestPalindromeSubseq('abcdefghijklmnopqrstuvwxyzz'), 2)
assert.equal(longestPalindromeSubseq('zabcdefghijklmnopqrstuvwxyz'), 3)
assert.equal(longestPalindromeSubseq('0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZZ'), 2)
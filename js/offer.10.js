const { equal } = require("assert");

const MOD = 1e9 + 7

/**
 * @param {number} n
 * @return {number}
 */
var numWays = function(n) {
  if(n <= 0) return 1

  const dp = new Array(n)
  dp[0] = 1
  dp[1] = 2
  for (let i = 2; i < n; i++) {
    dp[i] = dp[i-1] + dp[i-2]
    while (dp[i] >= MOD) dp[i] -= MOD
  }
  // console.log(dp);
  return dp[n-1]
};

equal(numWays(0), 1)
equal(numWays(1), 1)
equal(numWays(2), 2)
equal(numWays(7), 21)
for(let i = 0; i < 1000000; i++) {
  equal(numWays(100), 782204094)
}
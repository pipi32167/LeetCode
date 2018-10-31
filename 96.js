/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
    
  var dp = new Array(n+1).fill(0)
  dp[0] = 1
  for(var i = 1; i <= n; i++) {
    for(var j = 1; j <= i; j++) {
      // console.log(i, j-1, dp[j-1], n-j, dp[n-j]);
      dp[i] += dp[j-1] * dp[i-j]
    }
  }
  // console.log(dp);
  return dp[n]
};


console.log(numTrees(3), 5);
console.log(numTrees(10), 5);

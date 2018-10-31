/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    
  var dp = new Array(n).fill(0)
  dp[dp.length - 1] = 1
  dp[dp.length - 2] = 2
  for(var i = dp.length - 3; i >= 0; i--) {
    dp[i] = dp[i+1] + dp[i+2]
  }
  return dp[0]
};

console.log(climbStairs(2), 2);
console.log(climbStairs(3), 3);

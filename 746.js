/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
  
  var dp = new Array(cost.length+1).fill(0).map((e, idx) => cost[idx])
  dp[dp.length - 1] = 0
  for(var i = 2; i < dp.length; i ++) {
    dp[i] = dp[i] + Math.min(dp[i-1], dp[i-2])
  }
  // console.log(dp);
  return dp[dp.length-1]
};

console.log(minCostClimbingStairs([10, 15, 20]), 15);
var cost = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1]
console.log(minCostClimbingStairs(cost), 6);
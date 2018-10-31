/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  
  var dp = new Array(prices.length + 2).fill(0)
  for(var i = 3; i < dp.length; i++) {
    // dp[i] = Math.max(0, dp[i-2] + prices[i-1] - prices[i-2])
    for(var j = 2; j < i; j++) {
      dp[i] = Math.max(0, dp[i], dp[j], dp[j-2] + prices[i-2] - prices[j-2])
    }
  }
  // console.log(dp);
  
  return dp[prices.length + 1]
};

// console.log(maxProfit([7,1,5,3,6,4]), 7);
// console.log(maxProfit([1,2,3,4,5]), 4);
// console.log(maxProfit([1,2,3,4,5].reverse()), 0);
// console.log(maxProfit([6,1,3,2,4,7]), 7);
console.log(maxProfit([1,2,3,0,2]), 3);
console.log(maxProfit([1,2,3,0,2,3]), 4);

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(k, prices) {
  if (k === 0) {
    return 0
  }

  k = Math.min(k, Math.floor(prices.length / 2))

  var dp = new Array(k)
  var dpLen = prices.length + 2
  for(var i = 0; i < dp.length; i++) {
    dp[i] = new Array(dpLen).fill(0)
  }
  
  for(var i = 3; i < dpLen; i++) {
    for(var j = 2; j < i; j++) {
      // console.log(prices[i-2], prices[j-2]);
      dp[0][i] = Math.max(dp[0][i], dp[0][j], prices[i-2] - prices[j-2])
      for(var l = 1; l < k; l ++) {
        dp[l-1][i] = Math.max(dp[l-1][i], dp[l-1][j], prices[i-2] - prices[j-2])
        dp[l][i] = Math.max(dp[l][i], dp[l][j], dp[l-1][j-1] + prices[i-2] - prices[j-2])
      }
    }
  }
  // console.log(dp);
  return dp[k-1][prices.length+1]
};

var { prices, k } = require('./188_input')
console.log(k, prices.length);
console.log(maxProfit(k, prices), 6);
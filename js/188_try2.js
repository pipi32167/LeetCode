var calcMax = function (prices, i, j) {
  return 0
}
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(k, prices) {
  if (k === 0) {
    return 0
  }

  k = Math.min(k, Math.floor(prices.length / 2))

  var priceLen = prices.length
  var maxProfit = new Array(priceLen)
  for(var i = 0; i < priceLen; i++) {
    maxProfit[i] = new Array(priceLen).fill(0)
    for(var j = i; j < priceLen; j++) {
      maxProfit[j][priceLen - 1] = calcMax(prices, j, priceLen - 1)
    }
  }

  var dp = new Array(k+1).fill(0)
  dp[0] = new Array(priceLen).fill(0)
  for(var i = 1; i < dp.length; i++) {
    dp[i] = new Array(priceLen).fill(0)
    for(var j = 0; j < priceLen; j++) {
      // console.log({ 
      //   i, 
      //   j, 
      //   [`dp[${i-1}][${j-1}]`]: dp[i-1][j-1], 
      //   [`maxProfit[${j}][${priceLen-1}]`]: maxProfit[j][priceLen-1],
      // });
      
      dp[i][j] = Math.max(dp[i][j], dp[i-1][j] + maxProfit[j][priceLen-1])
    }
  }

  console.log({maxProfit, dp});
  
  return dp[k][priceLen - 1]
};

prices = [3,2,6,5,0,3], k = 2
console.log(maxProfit(k, prices), 7);
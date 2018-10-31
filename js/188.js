/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(k, prices) {
  if (k === 0) {
    return 0
  }

  k = Math.min(k, Math.floor(prices.length / 2))

  var dp = new Array(k + 1)
  var maxIdx = new Array(k + 1)
  var dpLen = dp.length
  var dpItemLen = prices.length + 1
  for(var i = 0; i < dpLen; i++) {
    dp[i] = new Array(dpItemLen).fill(0)
    maxIdx[i] = new Array(dpItemLen).fill(0)
  }
  
  // for(var i = 3; i < dpItemLen; i++) {
  //   for(var j = 2; j < i; j++) {
  //     // console.log(prices[i-2], prices[j-2]);
  //     dp[0][i] = Math.max(dp[0][i], dp[0][j], prices[i-2] - prices[j-2])
  //     for(var l = 1; l < k; l ++) {
  //       dp[l-1][i] = Math.max(dp[l-1][i], dp[l-1][j], prices[i-2] - prices[j-2])
  //       dp[l][i] = Math.max(dp[l][i], dp[l][j], dp[l-1][j-1] + prices[i-2] - prices[j-2])
  //     }
  //   }
  // }

  // init dp[1] & maxIdx[1]
  for(var i = 1; i < dpItemLen; i++) {
    for(var j = 1; j < i; j++) {
      dp[1][i] = Math.max(dp[1][i], dp[1][j], prices[i-1] - prices[j-1])
    }
    
    if (dp[1][i] > dp[1][i-1]) {
      maxIdx[1][i] = i
    } else {
      maxIdx[1][i] = maxIdx[1][i-1]
    }
    // console.log({ i, 'dp[1][i]': dp[1][i], 'dp[1][i-1]': dp[1][i-1], 'maxIdx[1][i]': maxIdx[1][i] });
  }

  for(var i = 2; i < dpLen; i ++) {
    for(var j = 1; j < dpItemLen; j++) {
      dp[i][j] = Math.max(
        dp[i-1][j], 
        dp[i][j-1], 
        dp[i-1][j-1] + prices[j-1] - prices[maxIdx[i-1][j-1]]
      )
      
      if (dp[i][j] > dp[i][j-1]) {
        maxIdx[i][j] = j
      } else {
        maxIdx[i][j] = maxIdx[i][j-1]
      }
      console.log({ 
        i, 
        j, 
        'dp[i-1][j]': dp[i-1][j], 
        'dp[i][j-1]': dp[i][j-1], 
        'dp[i-1][j-1]': dp[i-1][j-1], 
        'maxIdx[i-1][j-1]': maxIdx[i-1][j-1], 
        'maxIdx[i][j]': maxIdx[i][j],
        'maxIdx[i-1][j-1]+1': maxIdx[i-1][j-1]+1,
        'prices[j-1]': prices[j-1],
        'prices[maxIdx[i-1][j-1]': prices[maxIdx[i-1][j-1]],
      });
    }
  }
  
  // console.log({dp, maxIdx});
  return dp[k][prices.length]
};

// prices = [1,2,3,1,2,4,1,2,3], k = 3
// console.log(maxProfit(k, prices), 7);
// prices = [2,4,1], k = 2
// console.log(maxProfit(k, prices), 2);
prices = [3,2,6,5,0,3], k = 2
console.log(maxProfit(k, prices), 7);
// prices = [3,2,6,5,0,3], k = 3
// console.log(maxProfit(k, prices), 7);
// k = 0
// prices = [1,3]
// console.log(maxProfit(k, prices), 0);
// k = 1
// prices = [1,3]
// console.log(maxProfit(k, prices), 2);
// k = 3
// prices = [1,3]
// console.log(maxProfit(k, prices), 2);
// prices = [1,3,1,3,1,3], k = 3
// console.log(maxProfit(k, prices), 6);
// prices = [1,2,3,1,2,3,1,2,3], k = 4
// console.log(maxProfit(k, prices), 6);
// prices = [1,2,3,1,2,3,1,2,3,3], k = 5
// console.log(maxProfit(k, prices), 6);
// var { prices, k } = require('./188_input')
// console.log(k, prices.length);
// console.log(maxProfit(k, prices), 6);
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  
  var dp1 = new Array(prices.length + 2).fill(0)
  var dp2 = new Array(prices.length + 2).fill(0)
  for(var i = 3; i < dp1.length; i++) {
    for(var j = 2; j < i; j++) {
      // console.log(prices[i-2], prices[j-2]);
      dp1[i] = Math.max(dp1[i], dp1[j], prices[i-2] - prices[j-2])
      dp2[i] = Math.max(dp2[i], dp2[j], dp1[j-1] + prices[i-2] - prices[j-2])
    }
  }
  // console.log({dp1, dp2});
  return dp2[prices.length+1]
};

console.log(maxProfit([3,3,5,0,0,3,1,4]), 6);
console.log(maxProfit([1,2,3,4,5]), 4);
console.log(maxProfit([7,6,4,3,1]), 0);

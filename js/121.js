/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  var max = 0
  for(var i = 1; i < prices.length; i++) {
    for(var j = 0; j < i; j++) {

      if (max < prices[i] - prices[j]) {
        max = prices[i] - prices[j]
      }
    }
  }

  return max
};

console.log(maxProfit([7,1,5,3,6,4]), 5);
console.log(maxProfit([7,6,4,3,1]), 0);

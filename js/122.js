/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  
  var profit = 0, hold = false, holdPrice
  for(var i = 1; i < prices.length; i++) {
    if (prices[i-1] < prices[i]) {
      if (!hold) {
        holdPrice = prices[i-1]
        hold = true
        // console.log('buy', { holdPrice, nextPrice: prices[i] });
      }
    } else if (prices[i-1] > prices[i]) {
      if (hold) {
        profit += prices[i-1] - holdPrice
        hold = false
        // console.log('sell', { holdPrice, sellPrice: prices[i-1], nextPrice: prices[i], profit });
      }
    }
  }

  if (hold && prices[prices.length - 1] > holdPrice) {
    profit += prices[prices.length - 1] - holdPrice
  }
  return profit
};

console.log(maxProfit([7,1,5,3,6,4]), 7);
console.log(maxProfit([1,2,3,4,5]), 4);
console.log(maxProfit([1,2,3,4,5].reverse()), 0);
console.log(maxProfit([6,1,3,2,4,7]), 7);

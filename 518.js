var doChange = function (amount, coins, idx, cache = {}) {
  //  console.log('change', amount, coins.length);
   if (amount === 0) {
    // console.log('change end');
    return 1
  }
  if (coins.length === idx) {
    return 0
  }
  if (amount < coins[idx]) {
    return 0
  }

  var key = amount + '|' + idx
  if (cache[key] !== undefined) {
    // console.log('hit', key);
    return cache[key]
  }

  var count = 0, coin = coins[idx], coinCount = 0
  while (amount >= coin * coinCount) {
    // console.log({ amount, coinCount });
    count += doChange(amount - coin * coinCount, coins, idx+1, cache)
    coinCount++
  }
  cache[key] = count
  return count
}
/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function(amount, coins) {
  coins = coins.sort(function (a, b) {
    return a-b
  })
  return doChange(amount, coins, 0)
};


var change = function (amount, coins) {
  var dp = new Array(amount + 1).fill(0)
  dp[0] = 1
  for (var i = 0; i < coins.length; i ++) {
    var coin = coins[i]
    for (var j = coin; j <= amount; j++) {
      dp[j] += dp[j-coin];
    }
  }
  // console.log(dp);
  return dp[amount];
}

var amount = 5, coins = [1, 2, 5]
console.log(change(amount, coins), 4);
var amount = 3, coins = [2]
console.log(change(amount, coins), 0);
var amount = 10, coins = [10] 
console.log(change(amount, coins), 1);

var amount = 5000, coins = new Array(500).fill(0).map((elem, idx) => idx + 1)
console.log(change(amount, coins), 4);

var { amount, coins } = require('./518_input')
console.log(change(amount, coins), 96650);
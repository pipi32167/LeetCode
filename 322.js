var go = function (coins, amount, idx, sum, count, prefix, result) {

  if (amount === sum) {
    if (result.minCount > count) {
      result.minCount = count
      // console.log(prefix);
    }
    return
  }
  if (idx >= coins.length) {
    return 
  }

  var remain = amount - sum
  var coin = coins[idx]
  var i = Math.floor(remain / coin)
  if (result.minCount <= count + i) {
    return
  }
  for(; i >= 0; i--) {
    // prefix.push([i, coin])
    go(coins, amount, idx + 1, sum + i * coin, count + i, prefix, result)
    // prefix.pop()
  }
}

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
  coins = coins.sort((a, b) => b-a)
  var result = { minCount: Math.pow(2, 32) }
  go(coins, amount, 0, 0, 0, [], result)
  return result.minCount === Math.pow(2, 32) ? -1 : result.minCount
};

console.log(coinChange([1,2,5], 11) === 3);
console.log(coinChange([2], 11) === -1);
console.log(coinChange([186,419,83,408], 6249) === 20);
console.log(coinChange([429,171,485,26,381,31,290], 8440) === 20);
console.log(coinChange([244,125,459,120,316,68,357,320], 9793) === 23);
console.log(coinChange([125,146,125,252,226,25,24,308,50], 8402) === 29);


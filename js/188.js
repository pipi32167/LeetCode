// var calcMaxProfit = function (prices, risingRanges, k, start, memo) {
//   if (k < 0 || start >= risingRanges.length) {
//     return 0
//   }
//   if (memo[k][start] !== -1) {
//     return memo[k][start]
//   }
//   // console.log({k, start});
//   let max = 0, maxRange
//   for (let i = start; i < risingRanges.length; i++) {
//     const rangeStart = risingRanges[i][0]
//     for (let j = i; j < risingRanges.length; j++) {
//       const rangeEnd = risingRanges[j][1]
//       const res = prices[rangeEnd] - prices[rangeStart] + calcMaxProfit(prices, risingRanges, k - 1, j + 1, memo)
//       if (max < res) {
//         max = res
//         maxRange = [rangeStart, rangeEnd]
//       }
//     }
//   }

//   // console.log({ k, start, max, maxRange });
//   memo[k][start] = max
//   return max
// }

// /**
//  * @param {number} k
//  * @param {number[]} prices
//  * @return {number}
//  */
// var maxProfit = function (k, prices) {
//   if (k === 0) {
//     return 0
//   }

//   const risingRanges = []
//   let range = null
//   for (let i = 1; i < prices.length; i++) {
//     if (prices[i] >= prices[i - 1]) {
//       if (!range) {
//         range = [i - 1, i]
//       }
//       range[1] = i
//     } else {
//       if (range) {
//         risingRanges.push(range)
//       }
//       range = null
//     }
//   }

//   if (range) {
//     risingRanges.push(range)
//   }

//   k = Math.min(k, risingRanges.length)

//   if (k === risingRanges.length) {
//     return risingRanges.reduce((s, e) => {
//       const [i, j] = e
//       return s + prices[j] - prices[i]
//     }, 0)
//   }

//   const memo = Array(k).fill(0).map(() => Array(risingRanges.length).fill(-1))
//   // console.log(k, risingRanges.length, k * risingRanges.length);

//   const res = calcMaxProfit(prices, risingRanges, k-1, 0, memo)
//   // console.log({k, risingRanges, memo});

//   return res
// };

var calcMaxProfit = function (prices, risingRanges, maxProfits, k, start, memo) {
  if (k < 0 || start >= risingRanges.length) {
    return 0
  }
  if (memo[k][start] !== -1) {
    return memo[k][start]
  }
  let max = 0
  for (let i = start; i < risingRanges.length; i++) {
    const res = maxProfits[start][i] + calcMaxProfit(prices, risingRanges, maxProfits, k - 1, i + 1, memo)
    if (max < res) {
      max = res
    }
  }
  memo[k][start] = max
  return max
}

var genRisingRanges = function (prices) {
  const result = []
  let range = null
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] >= prices[i - 1]) {
      if (!range) {
        range = [i - 1, i]
      }
      range[1] = i
    } else {
      if (range) {
        result.push(range)
      }
      range = null
    }
  }

  if (range) {
    result.push(range)
  }
  return result
}

var max = function (...args) {
  let res = args[0]
  for (let i = 1; i < args.length; i++) {
    if (res < args[i]) {
      res = args[i]
    }
  }
  return res
}

var genMaxProfits = function (prices, risingRanges, profits) {

  const maxProfits = Array(profits.length).fill(0).map(() => Array(profits.length).fill(0))
  for (let i = profits.length - 1; i >= 0; i--) {
    maxProfits[i][i] = profits[i]
    const start = risingRanges[i][0]
    for (let j = i + 1; j < profits.length; j++) {
      const end = risingRanges[j][1]
      const profit = prices[end] - prices[start]
      maxProfits[i][j] = max(
        profit,
        maxProfits[i + 1][j],
        maxProfits[i][j - 1],
      )
    }
  }
  return maxProfits
}

/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (k, prices) {
  if (k === 0) {
    return 0
  }
  //计算所有的上升区间
  const risingRanges = genRisingRanges(prices)
  k = Math.min(k, risingRanges.length)
  const profits = risingRanges.map(([i, j]) => prices[j] - prices[i])
  //如果区间数 <= k，计算所有区间的收益和
  if (k === risingRanges.length) {
    return profits.reduce((s, e) => s + e, 0)
  }
  //如果区间数 > k
  //采用动态规划，计算多个区间的最大收益
  const maxProfits = genMaxProfits(prices, risingRanges, profits)
  //采用分治算法，计算最大收益
  const memo = Array(k).fill(0).map(() => Array(risingRanges.length).fill(-1))
  return calcMaxProfit(prices, risingRanges, maxProfits, k - 1, 0, memo)
};

const assert = require('assert');
// var {
//   prices,
// } = require('./188_input')
// var k = 1000
// assert.equal(maxProfit(k, prices), 1648961);
var k = 2
var prices = [8, 6, 4, 3, 3, 2, 3, 5, 8, 3, 8, 2, 6]
assert.equal(maxProfit(k, prices), 11);
var k = 1
var prices = [6, 1, 6, 4, 3, 0, 2]
assert.equal(maxProfit(k, prices), 5);
var k = 2
var prices = [1, 2, 4, 2, 5, 7, 2, 4, 9, 0]
assert.equal(maxProfit(k, prices), 13);
var prices = [2, 4, 1],
  k = 2
assert.equal(maxProfit(k, prices), 2);
var prices = [3, 2, 6, 5, 0, 3],
  k = 2
assert.equal(maxProfit(k, prices), 7);
var prices = [5, 4, 3, 2, 1, 0],
  k = 2
assert.equal(maxProfit(k, prices), 0);
var prices = [3, 2, 6, 5, 0, 3],
  k = 3
assert.equal(maxProfit(k, prices), 7);
var k = 0
var prices = [1, 3]
assert.equal(maxProfit(k, prices), 0);
var k = 1
var prices = [1, 3]
assert.equal(maxProfit(k, prices), 2);
var k = 3
var prices = [1, 3]
assert.equal(maxProfit(k, prices), 2);
var prices = [1, 3, 1, 3, 1, 3],
  k = 3
assert.equal(maxProfit(k, prices), 6);
var prices = [1, 2, 3, 1, 2, 3, 1, 2, 3],
  k = 4
assert.equal(maxProfit(k, prices), 6);
var prices = [1, 2, 3, 1, 2, 3, 1, 2, 3, 3],
  k = 5
assert.equal(maxProfit(k, prices), 6);
var {
  prices,
  k
} = require('./188_input')
// console.log(k, prices.length);
assert.equal(maxProfit(k, prices), 1648961);
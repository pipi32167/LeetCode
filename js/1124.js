const { equal } = require("assert");

function tiredDay (hour) {
  return hour > 8 ? 1 : -1
}

let cnt = 0
/**
 * @param {number[]} hours
 * @return {number}
 */
var longestWPI = function (hours) {

  const dp = new Array(hours.length).fill(0)
  
  dp[0] = hours[0] = tiredDay(hours[0])
  for (let i = 1; i < hours.length; i++) {
    hours[i] = tiredDay(hours[i])
    dp[i] += dp[i - 1] + hours[i]
  }
  let max = 0
  for (let i = 0; i < dp.length; i++) {
    for (let j = dp.length - 1; j >= i; j--) {
      const len = j - i + 1
      if (max >= len) break
      // cnt ++
      const ret = dp[j] - dp[i] + hours[i]
      if (ret > 0) {
        // console.log({ i, j, max, len, ret });
        max = len
        break
      }
    }
  }
  return max
};

var hours = [9,9,6,0,6,6,9], ret = 3
equal(longestWPI(hours), ret)
var hours = [9,9,6,0,6,6,9,9,9,9,0,0], ret = 11
equal(longestWPI(hours), ret)
var hours = new Array(4999).fill(8).concat(new Array(5001).fill(9)), ret = 10000
// console.log(hours.length);
equal(longestWPI(hours), ret)
var { hours, ret = 2687 } = require("./1124_input")
console.log(hours.length);
equal(longestWPI(hours), ret)
console.log(cnt);
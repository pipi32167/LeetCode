/**
 * @param {number[]} A
 * @return {number}
 */
var sumSubarrayMins = function (A) {

  let sum = A.reduce((s, e) => s + e, 0)

  let result = A
  do {

    // let result2 = Array(result.length - 1)
    for (let i = 1; i < result.length; i++) {
      if (result[i - 1] > result[i]) {
        result[i - 1] = result[i]
      }
      sum += result[i - 1]
    }
    if (sum >= 1000000007) {
      sum %= 1000000007
    }
    result.length = result.length - 1
  } while (result.length > 1)

  return sum
};

var assert = require('assert');
assert.equal(sumSubarrayMins([3, 1, 2, 4]), 17)
assert.equal(sumSubarrayMins(Array(30000).fill(0)), 0)
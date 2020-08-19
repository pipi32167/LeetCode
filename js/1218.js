const { equal } = require("assert")

/**
 * @param {number[]} arr
 * @param {number} difference
 * @return {number}
 */
var longestSubsequence = function (arr, difference) {

  const dp = new Map()
  let max = 1
  for (const v of arr) {
    const ret = (dp.get(v - difference) || 0) + 1
    dp.set(v, ret)
    max = Math.max(ret, max)
  }
  return max
};

var arr = [1,2,3,4], difference = 1, ret = 4
equal(longestSubsequence(arr, difference), ret)
var arr = [1,3,5,7], difference = 1, ret = 1
equal(longestSubsequence(arr, difference), ret)
var arr = [1,5,7,8,5,3,4,2,1], difference = -2, ret = 4
equal(longestSubsequence(arr, difference), ret)
var arr = [3,4,-3,-2,-4], difference = -5, ret = 2
equal(longestSubsequence(arr, difference), ret)
var arr = [8,3,4,-3,-2,-4,-7], difference = -5, ret = 4
equal(longestSubsequence(arr, difference), ret)
var { arr, difference } = require('./1218_input'), ret = 4
equal(longestSubsequence(arr, difference), ret)
var { arr2, difference2 } = require('./1218_input'), ret = 8624
equal(longestSubsequence(arr2, difference2), ret)
// console.log(cnt);
//https://leetcode-cn.com/problems/find-longest-subarray-lcci/submissions/

const {
  deepEqual
} = require("assert");


const code0 = '0'.charCodeAt(0)
const code9 = '9'.charCodeAt(0)
const isNum = function (c) {
  const code = c.charCodeAt(0)
  return code >= code0 && code <= code9
}

/**
 * @param {string[]} array
 * @return {string[]}
 */
var findLongestSubarray0 = function (array) {

  const dp1 = new Array(array.length + 1).fill(0),
    dp2 = new Array(array.length + 1).fill(0)
  let sum1 = 0,
    sum2 = 0
  const isNum2 = new Array(array.length).fill(false)
  for (let i = 0; i < array.length; i++) {
    const e = array[i];
    isNum2[i] = isNum(e)
    if (isNum2[i]) {
      sum1++
    } else {
      sum2++
    }
    dp1[i] = sum1
    dp2[i] = sum2
  }
  let maxLen = 0
  let maxRes
  for (let i = 0; i < array.length; i++) {
    for (let j = array.length - 1; j >= i + maxLen; j--) {
      // console.log('check', i, j);
      sum1 = dp1[j] - dp1[i] + (isNum2[i] ? 1 : 0)
      sum2 = dp2[j] - dp2[i] + (!isNum2[i] ? 1 : 0)
      if (sum1 === 0 || sum2 === 0) {
        break
      }
      if (sum1 === sum2) {
        maxLen = j - i + 1
        maxRes = [i, j]
        // console.log('hit', array.slice(i, j + 1));
        break
      }
    }
  }

  const ret = maxLen > 0 ? array.slice(maxRes[0], maxRes[1] + 1) : []
  // console.log(maxLen, maxRes, ret);
  return ret
};


/**
 * @param {string[]} array
 * @return {string[]}
 */
var findLongestSubarray1 = function (array) {

  const dp1 = new Array(array.length).fill(0),
    dp2 = new Array(array.length).fill(0)
  let sum1 = 0,
    sum2 = 0
  const isNum2 = new Array(array.length).fill(false)
  for (let i = 0; i < array.length; i++) {
    const e = array[i];
    isNum2[i] = isNum(e)
    if (isNum2[i]) {
      sum1++
    } else {
      sum2++
    }
    dp1[i] = sum1
    dp2[i] = sum2
  }
  console.log({ sum1, sum2 });
  
  const maxLen = Math.min(sum1, sum2) * 2
  for (let j = maxLen; j >= 2; j -= 2) {
    for (let i = 0; i < array.length - j + 1; i++) {
      sum1 = dp1[i + j - 1] - dp1[i] + (isNum2[i] ? 1 : 0)
      sum2 = dp2[i + j - 1] - dp2[i] + (!isNum2[i] ? 1 : 0)
      if (sum1 === sum2) {
        // console.log(i, j);
        return array.slice(i, i+j)
      }
    }
  }

  return []
};


/**
 * @param {string[]} array
 * @return {string[]}
 */
var findLongestSubarray = function (array) {

  const len = array.length
  const memo = new Array((len << 1) + 1).fill(-2)
  memo[len] = -1
  let begin = 0, end = 0
  let max = 0, sum = 0

  for(let i = 0; i < len; i++) {
    const isNum2 = isNum(array[i])
    sum += isNum2 ? 1 : -1
    if (memo[sum + len] <= -2) {
      memo[sum + len] = i
    } else if (max < i - memo[sum + len]) {
      [begin, end] = [memo[sum + len] + 1, i + 1]
      max = i - memo[sum + len]
    }
  }
  // console.log(memo);
  return array.slice(begin, end)
};


let array = ["A", "1", "B", "C", "D", "2", "3", "4", "E", "5", "F", "G", "6", "7", "H", "I", "J", "K", "L", "M"]
let result = ["A", "1", "B", "C", "D", "2", "3", "4", "E", "5", "F", "G", "6", "7"]
deepEqual(findLongestSubarray(array), result)
array = ["A", "A"], result = []
deepEqual(findLongestSubarray(array), result)
array = ["42", "10", "O", "t", "y", "p", "g", "B", "96", "H", "5", "v", "P", "52", "25", "96", "b", "L", "Y", "z", "d", "52", "3", "v", "71", "J", "A", "0", "v", "51", "E", "k", "H", "96", "21", "W", "59", "I", "V", "s", "59", "w", "X", "33", "29", "H", "32", "51", "f", "i", "58", "56", "66", "90", "F", "10", "93", "53", "85", "28", "78", "d", "67", "81", "T", "K", "S", "l", "L", "Z", "j", "5", "R", "b", "44", "R", "h", "B", "30", "63", "z", "75", "60", "m", "61", "a", "5", "S", "Z", "D", "2", "A", "W", "k", "84", "44", "96", "96", "y", "M"]
result = ["52", "3", "v", "71", "J", "A", "0", "v", "51", "E", "k", "H", "96", "21", "W", "59", "I", "V", "s", "59", "w", "X", "33", "29", "H", "32", "51", "f", "i", "58", "56", "66", "90", "F", "10", "93", "53", "85", "28", "78", "d", "67", "81", "T", "K", "S", "l", "L", "Z", "j", "5", "R", "b", "44", "R", "h", "B", "30", "63", "z", "75", "60", "m", "61", "a", "5"]
deepEqual(findLongestSubarray(array), result)
array = new Array(100000).fill('A')
result = []
deepEqual(findLongestSubarray(array), result)
array = new Array(80000).fill('A').concat(new Array(20000).fill('1'))
result = array.slice(60000)
deepEqual(findLongestSubarray(array), result)

array = require("./17.05_input.js").array
result = require("./17.05_input.js").result
deepEqual(findLongestSubarray(array), result)
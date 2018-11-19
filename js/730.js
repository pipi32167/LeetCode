const MAX = Math.pow(10, 9) + 7

var indexOf = function (arr, start) {

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= start) {
      return arr[i]
    }
  }
  return -1
}

var lastIndexOf = function (arr, end) {

  for (let i = arr.length; i >= 0; i--) {
    if (arr[i] < end) {
      return arr[i]
    }
  }
  return -1
}

var go = function (s, dp, chars, start, end) {
  // console.log('go', {
  //   s: s.slice(start, end + 1),
  //   start,
  //   end
  // });
  if (start >= end) {
    if (start === end) {
      dp[start][end] = 0
    }
    return 0
  }

  if (dp[start][end] !== -1) {
    return dp[start][end]
  }

  let count = 0
  for (let i = 0; i < 26; i++) {
    const newStart = indexOf(chars[i], start)
    const newEnd = lastIndexOf(chars[i], end)
    if (newStart === -1 || newStart >= end) {
      continue
    }
    count++
    if (newStart !== newEnd) {
      count++
    }
    count += go(s, dp, chars, newStart + 1, newEnd)
  }
  // console.log('go2', {
  //   s: s.slice(start, end + 1),
  //   count,
  //   start,
  //   end
  // });
  dp[start][end] = count % MAX
  return dp[start][end]
}

/**
 * @param {string} s
 * @return {number}
 */
var countPalindromicSubsequences = function (s) {
  const dp = new Array(s.length + 1).fill(0).map(() => new Array(s.length + 1).fill(-1))
  const chars = new Array(26).fill(0).map(() => [])
  const charStart = 'a'.charCodeAt(0)
  for (let i = 0; i < s.length; i++) {
    chars[s.charCodeAt(i) - charStart].push(i)
  }
  const count = go(s, dp, chars, 0, s.length)
  // console.log({
  //   dp,
  //   count
  // });
  return count
};

var assert = require('assert')
assert.equal(countPalindromicSubsequences('a'), 1)
assert.equal(countPalindromicSubsequences('aa'), 2)
assert.equal(countPalindromicSubsequences('aabb'), 4)
assert.equal(countPalindromicSubsequences('bccb'), 6)
assert.equal(countPalindromicSubsequences('abccb'), 7)
assert.equal(countPalindromicSubsequences('abab'), 6)
assert.equal(countPalindromicSubsequences('abcdabcdabcdabcdabcdabcdabcdabcddcbadcbadcbadcbadcbadcbadcbadcba'), 104860361)
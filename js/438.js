const CODE_START = 'a'.charCodeAt(0)

/**
 * @param {string} s
 * @return {number[]}
 */
var convert = function (s) {
  return s.split('').map(e => e.charCodeAt(0) - CODE_START)
}

var add = function (nums, i, count = 1) {
  nums[i] += count
  return nums
}

var sub = function (nums, i) {
  return add(nums, i, -1)
}

var isEqual = function (nums1, nums2) {
  if (nums1.length !== nums2.length) {
    return false
  }
  for (let i = 0; i < nums1.length; i++) {
    if (nums1[i] !== nums2[i]) {
      return false
    }
  }
  return true
}

/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {

  s = convert(s)
  p = convert(p)

  let p2 = new Array(26).fill(0)
  for (let i = 0; i < p.length; i++) {
    p2 = add(p2, p[i])
  }

  let res = new Array(26).fill(0)
  for (let i = 0; i < p.length - 1; i++) {
    res = add(res, s[i])
  }
  let result = []
  for (let i = 0; i <= s.length - p.length; i++) {
    res = add(res, s[i + p.length - 1])
    // console.log({res, p2, isEqual: isEqual(res, p2)});
    if (isEqual(res, p2)) {
      result.push(i)
    }
    res = sub(res, s[i])
  }
  return result
};

var assert = require('assert');
assert.deepEqual(findAnagrams('cbaebabacd', 'abc'), [0, 6])
assert.deepEqual(findAnagrams('abab', 'ab'), [0, 1, 2])
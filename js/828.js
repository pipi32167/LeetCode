const CODE_START = 'A'.charCodeAt(0)
const MOD = Math.pow(10, 9) + 7

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

var UNIQ = function (nums) {

  let count = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      count++
    }
  }
  // console.log(nums, count);
  return count
}

/**
 * @param {string} S
 * @return {number}
 */
var uniqueLetterString = function (S) {
  S = convert(S)
  // console.log(S);
  let count = 0
  for (let i = 0; i < S.length; i++) {
    let res = new Array(26).fill(0)
    let count2 = 0
    for (let j = i; j < S.length; j++) {
      res = add(res, S[j])
      if (res[S[j]] === 1) {
        count2++
      } else if (res[S[j]] === 2) {
        count2--
      }
      count += count2
      if (count > MOD) {
        count %= MOD
      }
    }
  }
  return count
};

var assert = require('assert');
var _ = require('lodash')
assert.equal(uniqueLetterString('ABC'), 10)
assert.equal(uniqueLetterString('ABA'), 8)
var S = new Array(10000).fill(0).map(() => 'A').join('')
assert.equal(uniqueLetterString(S), 10000)
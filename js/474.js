var convert = function (s) {

  let count = [0, 0]
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '0') {
      count[0]++
    } else {
      count[1]++
    }
  }
  return count
}

var gte = function (nums1, nums2) {
  // console.log({ nums1, nums2 });

  for (let i = 0; i < nums1.length; i++) {
    if (nums1[i] < nums2[i]) {
      return false
    }
  }
  return true
}

var gt = function (nums1, nums2) {
  for (let i = 0; i < nums1.length; i++) {
    if (nums1[i] <= nums2[i]) {
      return false
    }
  }
  return true
}

var lte = function (nums1, nums2) {
  return !gt(nums1, nums2)
}

var lt = function (nums1, nums2) {
  return !gte(nums1, nums2)
}

var add = function (nums1, nums2) {
  let result = []
  for (let i = 0; i < nums1.length; i++) {
    result.push(nums1[i] + nums2[i])
  }
  return result
}

var sub = function (nums1, nums2) {
  // console.log({ nums1, nums2 });
  let result = []
  for (let i = 0; i < nums1.length; i++) {
    result.push(nums1[i] - nums2[i])
  }
  return result
}

var counting = function (nums) {
  return nums.reduce((s, e) => s + e, 0)
}

var calcMax = function (dp1, dp2, remain, i, j) {
  // console.log({i, j});

  const sum = sub(dp1[j + 1], dp1[i])
  if (gte(remain, sum)) {
    return {
      max: j - i + 1,
      sum,
      cnt: counting(sum),
    }
  }

  const sum1 = add(dp2[i][i].sum, dp2[i + 1][j].sum)
  let res1
  if (gte(remain, sum1)) {
    res1 = {
      max: dp2[i + 1][j].max + dp2[i][i].max,
      sum: sum1,
      cnt: counting(sum1),
    }
  } else {
    res1 = {
      max: dp2[i + 1][j].max,
      sum: dp2[i + 1][j].sum.slice(0),
      cnt: dp2[i + 1][j].cnt,
    }
  }

  const sum2 = add(dp2[i][j - 1].sum, dp2[j][j].sum)
  let res2
  if (gte(remain, sum2)) {
    res2 = {
      max: dp2[i][j - 1].max + dp2[j][j].max,
      sum: sum2,
      cnt: counting(sum2),
    }
  } else {
    res2 = {
      max: dp2[i][j - 1].max,
      sum: dp2[i][j - 1].sum.slice(0),
      cnt: dp2[i][j - 1].cnt,
    }
  }

  let res
  if (res1.max === res2.max) {
    res = res1.cnt < res2.cnt ? res1 : res2
  } else {
    res = res1.max > res2.max ? res1 : res2
  }
  return res
}

/**
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var findMaxForm = function (strs, m, n) {

  const remain = [m, n]
  strs.sort((a, b) => {
    if (a.length === b.length) {
      return a.localeCompare(b)
    }
    return a.length - b.length
  });
  strs = strs.map(convert)
  // strs = strs.map(convert).sort((b, a) => a.length - b.length)
  const len = strs.length
  let sum = [0, 0]
  let dp1 = new Array(len + 1).fill(0)
  dp1[0] = [0, 0]
  for (let i = 0; i < len; i++) {
    sum = add(sum, strs[i])
    dp1[i + 1] = sum
  }

  let dp2 = new Array(len).fill(0).map(() => new Array(len).fill(0).map(() => ({
    max: 0,
    sum: [0, 0]
  })))
  for (let i = len - 1; i >= 0; i--) {
    dp2[i][i] = gte(remain, strs[i]) ? {
      max: 1,
      // sum: strs[i].slice(0)
      sum: strs[i]
    } : {
      max: 0,
      sum: [0, 0]
    }
    for (let j = i + 1; j < len; j++) {
      const sum = sub(dp1[j + 1], dp1[i])
      dp2[i][j] = calcMax(dp1, dp2, remain, i, j)
    }
  }
  // console.log(dp2[0][strs.length - 2]);
  // console.log(dp2[1][strs.length - 1]);
  // console.log(dp2[0][strs.length - 1]);
  return dp2[0][strs.length - 1].max
};

var assert = require('assert');
var strs = ["1", "0"],
  m = 1,
  n = 1
assert.equal(findMaxForm(strs, m, n), 2)
var strs = ["10", "0001", "111001", "1", "0"],
  m = 5,
  n = 3
assert.equal(findMaxForm(strs, m, n), 4)
var strs = ["10", "0", "1"],
  m = 1,
  n = 1
assert.equal(findMaxForm(strs, m, n), 2)
var strs = ["0", "1", "10", ],
  m = 1,
  n = 1
assert.equal(findMaxForm(strs, m, n), 2)
var strs = ["011", "1", "11", "0", "010", "1", "10", "1", "1", "0", "0", "0", "01111", "011", "11", "00", "11", "10", "1", "0", "0", "0", "0", "101", "001110", "1", "0", "1", "0", "0", "10", "00100", "0", "10", "1", "1", "1", "011", "11", "11", "10", "10", "0000", "01", "1", "10", "0"],
  m = 44,
  n = 39
assert.equal(findMaxForm(strs, m, n), 45)
// var strs = new Array(150).fill('0')
//   .concat(new Array(150).fill('1'))
// m = 100,
//   n = 100
// assert.equal(findMaxForm(strs, m, n), 200)
// var strs = new Array(150).fill('01')
//   .concat(new Array(150).fill('10'))
//   .concat(new Array(150).fill('11'))
//   .concat(new Array(150).fill('00')),
//   m = 100,
//   n = 100
// assert.equal(findMaxForm(strs, m, n), 100)
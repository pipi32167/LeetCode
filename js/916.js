const CODE_START = "a".codePointAt(0)
const CODE_END = "z".codePointAt(0)

var mkMap = function () {
  return Array(CODE_END - CODE_START + 1).fill(0)
}

var calcMap = function (s) {
  const map = mkMap()
  for (let i = 0; i < s.length; i++) {
    map[s.codePointAt(i) - CODE_START]++
  }
  return map
}

var isMatch = function (map2, map1) {

  for (let i = 0; i < map2.length; i++) {
    if (map2[i] < map1[i]) {
      return false
    }
  }
  return true
}

var merge = function (map) {

  const res = mkMap()
  for (let i = 0; i < map.length; i++) {
    for (let j = 0; j < map[i].length; j++) {
      res[j] = Math.max(res[j], map[i][j])
    }
  }
  return res
}

/**
 * @param {string[]} A
 * @param {string[]} B
 * @return {string[]}
 */
var wordSubsets = function (A, B) {

  const mapA = A.map(calcMap)
  const mapB = merge(B.map(calcMap))
  // console.log({mapA, mapB});
  const result = []
  for (let i = 0; i < A.length; i++) {
    // console.log(A[i], B, mapB, mapA[i], isMatch(mapB, mapA[i]));
    if (isMatch(mapA[i], mapB)) {
      result.push(A[i])
    }
  }
  // console.log('%j', result);
  return result
};

var assert = require('assert');
var A = ["amazon", "apple", "facebook", "google", "leetcode"],
  B = ["e", "o"]
var result = ["facebook", "google", "leetcode"]
assert.deepEqual(wordSubsets(A, B), result)
var A = ["amazon", "apple", "facebook", "google", "leetcode"],
  B = ["l", "e"]
var result = ["apple", "google", "leetcode"]
assert.deepEqual(wordSubsets(A, B), result)
var A = ["amazon", "apple", "facebook", "google", "leetcode"],
  B = ["e", "oo"]
var result = ["facebook", "google"]
assert.deepEqual(wordSubsets(A, B), result)
var A = ["amazon", "apple", "facebook", "google", "leetcode"],
  B = ["lo", "eo"]
var result = ["google", "leetcode"]
assert.deepEqual(wordSubsets(A, B), result)
var A = ["amazon", "apple", "facebook", "google", "leetcode"],
  B = ["ec", "oc", "ceo"]
var result = ["facebook", "leetcode"]
assert.deepEqual(wordSubsets(A, B), result)
var {
  A,
  B,
  result = []
} = require('./916_input2').sample1;
// require('fs').writeFileSync('./916_input2.json', JSON.stringify(require('./916_input')));
assert.deepEqual(wordSubsets(A, B).sort(), result.sort())
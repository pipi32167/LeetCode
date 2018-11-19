var counting = function (s) {
  let dict = {}
  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    dict[c] = dict[c] || 0
    dict[c]++
  }
  return dict
}

/**
 * @param {string} S
 * @param {string} T
 * @return {string}
 */
var customSortString = function (S, T) {

  let dictT = counting(T)
  let dictS = counting(S)

  let result = []
  for (let i = 0; i < S.length; i++) {
    const c = S[i];
    if (dictT[c] !== undefined) {
      result = result.concat(new Array(dictT[c]).fill(c))
    }
  }
  for (const c in dictT) {
    if (dictS[c] === undefined) {
      result = result.concat(new Array(dictT[c]).fill(c))
    }
  }
  return result.join('')
};

var assert = require('assert')
var S = "cba"
var T = "abcd"
var R = 'cbad'
assert.equal(customSortString(S, T), R)
var S = "abcdefg"
var T = "abcd"
var R = 'abcd'
assert.equal(customSortString(S, T), R)

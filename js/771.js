/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function (J, S) {
  // J = convert(J)
  // S = convert(S)
  let dict = {}
  for (let i = 0; i < S.length; i++) {
    dict[S[i]] = dict[S[i]] || 0;
    dict[S[i]]++
  }
  let count = 0
  for (let i = 0; i < J.length; i++) {
    count += dict[J[i]] || 0
  }
  return count
};

const CODE_START = 'A'.charCodeAt(0)
const CODE_END = 'z'.charCodeAt(0)

/**
 * @param {string} s
 * @return {number[]}
 */
var convert = function (s, fn) {
  let result = new Array(s.length)
  for (let i = 0; i < s.length; i++) {
    const code = s.charCodeAt(i) - CODE_START
    fn && fn(code)
    result[i] = code
  }
  return result
}


/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function (J, S) {
  let dict = new Array(CODE_END - CODE_START + 1).fill(0)
  J = convert(J)
  S = convert(S, e => dict[e]++)

  let count = 0
  for (let i = 0; i < J.length; i++) {
    count += dict[J[i]]
  }
  return count
};

var assert = require('assert');
var J = "aA",
  S = "aAAbbbb"
assert.equal(numJewelsInStones(J, S), 3)
var J = "z",
  S = "ZZ"
assert.equal(numJewelsInStones(J, S), 0)
var J = "aA",
  S = new Array(10000000).fill('a').join('')
assert.equal(numJewelsInStones(J, S), 10000000)
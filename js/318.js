var hasIntersecion = function (s1, s2) {

  for (const e of s1) {
    if (s2.has(e)) {
      return true
    }
  }
  return false
}

/**
 * @param {string[]} words
 * @return {number}
 */
var maxProduct = function (words) {

  let max = 0
  words = words.map(e => Array.from(e))
  const sets = words.map(e => new Set(e))
  // let maxRes
  for (let i = 0; i < words.length; i++) {
    // for (let i = words.length - 1; i >= 0; i--) {
    const w1 = words[i]
    const s1 = sets[i]
    for (let j = i + 1; j < words.length; j++) {
      const w2 = words[j]
      const product = w1.length * w2.length
      if (product < max) {
        continue
      }
      const s2 = sets[j]
      if (hasIntersecion(s1, s2)) {
        continue
      }

      max = product
      // maxRes = [w1, w2]
    }
  }
  // console.log(maxRes);
  return max
};


var assert = require('assert');
for (let index = 0; index < 10; index++) {
  assert.equal(maxProduct(require('./318_input').sample1), 115)
  assert.equal(maxProduct(require('./318_input').sample2), 126)
  assert.equal(maxProduct(require('./318_input').sample3), 95)
}
var words = ["eae", "ea", "aaf", "bda", "fcf", "dc", "ac", "ce", "cefde", "dabae"]
assert.equal(maxProduct(words), 15)
var words = ["abcw", "baz", "foo", "bar", "xtfn", "abcdef"]
assert.equal(maxProduct(words), 16)
var words = ["a", "ab", "abc", "d", "cd", "bcd", "abcd"]
assert.equal(maxProduct(words), 4)
var words = ["a", "aa", "aaa", "aaaa"]
assert.equal(maxProduct(words), 0)
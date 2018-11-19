var check = function (map, word1, word2) {
  if (!map.has(word1)) {
    map.set(word1, word2)
  } else if (map.get(word1) !== word2) {
    return false
  }
  return true
}

/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function (pattern, str) {
  const words = str.split(' ')
  if (pattern.length !== words.length) {
    return false
  }
  let map = new Map(),
    map2 = new Map()
  for (let i = 0; i < pattern.length; i++) {
    const c = pattern[i]
    const word = words[i]
    if (!check(map, c, word) || !check(map2, word, c)) {
      return false
    }
  }

  return true
};

var assert = require('assert');
var pattern = "abba",
  str = "dog cat cat dog"
assert.equal(wordPattern(pattern, str), true)
var pattern = "abba",
  str = "dog cat cat fish"
assert.equal(wordPattern(pattern, str), false)
var pattern = "aaaa",
  str = "dog cat cat dog"
assert.equal(wordPattern(pattern, str), false)
var pattern = "abba",
  str = "dog dog dog dog"
assert.equal(wordPattern(pattern, str), false)
var pattern = "aaa",
  str = "aa aa aa aa"
assert.equal(wordPattern(pattern, str), false)
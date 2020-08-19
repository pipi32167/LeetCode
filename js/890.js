var isMatch = function (word, pattern) {
  if (word.length !== pattern.length) {
    return false
  }

  const map = new Map
  const map2 = new Map
  word = Array.from(word)
  for (let i = 0; i < word.length; i++) {
    const c1 = word[i]
    const c2 = pattern[i]
    if (map.has(c1)) {
      if (map.get(c1) !== c2) {
        return false
      }
    } else if (map2.has(c2)) {
      return false
    } else {
      map.set(c1, c2)
      map2.set(c2, c1)
    }
  }
  return true
}

/**
 * @param {string[]} words
 * @param {string} pattern
 * @return {string[]}
 */
var findAndReplacePattern = function (words, pattern) {

  const result = []
  for (let i = 0; i < words.length; i++) {
    if (isMatch(words[i], pattern)) {
      result.push(words[i])
    }
  }
  return result
};

var assert = require('assert');
var words = ["abc", "deq", "mee", "aqq", "dkd", "ccc"],
  pattern = "abb"
var result = ["mee", "aqq"]
assert.deepEqual(findAndReplacePattern(words, pattern), result)
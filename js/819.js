/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function (paragraph, banned) {

  let words = paragraph.toLowerCase().split(/[!\?',;\.\s]/).filter(e => e.length > 0)
  banned = banned.map(e => e.toLowerCase())
  let dict = {},
    max = 0,
    maxRes
  for (let i = 0; i < words.length; i++) {
    const word = words[i]
    if (banned.indexOf(word) < 0) {
      dict[word] = dict[word] || 0
      dict[word]++
      if (max < dict[word]) {
        max = dict[word]
        maxRes = word
      }
    }
  }
  return maxRes
};

var assert = require('assert')

var paragraph = "Bob hit a ball, the hit BALL flew far after it was hit."
var banned = ["hit"]
var res = "ball"
assert.equal(mostCommonWord(paragraph, banned), res)
var paragraph = "a, a, a, a, b,b,b,c, c"
var banned = ["a"]
var res = "b"
assert.equal(mostCommonWord(paragraph, banned), res)
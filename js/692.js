/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function (words, k) {

  const map = new Map()
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    map.set(word, (map.get(word) || 0) + 1)
  }
  return Array
    .from(map.entries())
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
    .slice(0, k)
    .map(e => e[0])
};

var assert = require('assert');
var words = ["i", "love", "leetcode", "i", "love", "coding"],
  k = 2,
  result = ["i", "love"];
assert.deepEqual(topKFrequent(words, k), result)
var words = ["i", "love", "leetcode", "i", "love", "coding"],
  k = 3,
  result = ["i", "love", 'coding'];
assert.deepEqual(topKFrequent(words, k), result)
var words = ["the", "day", "is", "sunny", "the", "the", "the", "sunny", "is", "is"],
  k = 4,
  result = ["the", "is", "sunny", "day"]
assert.deepEqual(topKFrequent(words, k), result)
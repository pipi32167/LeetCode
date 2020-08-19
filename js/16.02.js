const { equal } = require("assert");

/**
 * @param {string[]} book
 */
var WordsFrequency = function(book) {

  const map = new Map()
  for (let i = 0; i < book.length; i++) {
    const word = book[i];
    map.set(word, (map.get(word) || 0) + 1)
  }
  this.map = map
};

/** 
 * @param {string} word
 * @return {number}
 */
WordsFrequency.prototype.get = function(word) {
  return this.map.get(word) || 0
};


var wordsFrequency = new WordsFrequency(["i", "have", "an", "apple", "he", "have", "a", "pen"]);
equal(wordsFrequency.get("you"), 0)
equal(wordsFrequency.get("have"), 2)
equal(wordsFrequency.get("an"), 1)
equal(wordsFrequency.get("apple"), 1)
equal(wordsFrequency.get("pen"), 1)

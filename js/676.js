/**
 * Initialize your data structure here.
 */
var MagicDictionary = function() {
  this.__dict = []
};

/**
 * Build a dictionary through a list of words 
 * @param {string[]} dict
 * @return {void}
 */
MagicDictionary.prototype.buildDict = function(dict) {
  this.__dict = dict;
};

var match = function (word1, word2) {
  if (word1.length !== word2.length) {
    return false;
  }
  var count = 0;
  for(var i = 0; i < word1.length; i++) {
    if (word1[i] !== word2[i]) {
      count++;
      if (count > 1) {
        return false;
      }
    }
  }
  return count === 1;
}

/**
 * Returns if there is any word in the trie that equals to the given word after modifying exactly one character 
 * @param {string} word
 * @return {boolean}
 */
MagicDictionary.prototype.search = function(word) {
  for(var i = 0; i < this.__dict.length; i++) {
    if (match(this.__dict[i], word)) {
      return true
    }
  }
  return false;
};

var obj = new MagicDictionary()
obj.buildDict(["hello", "leetcode"])
console.log(obj.search("hello"))
console.log(obj.search("hhllo"))
console.log(obj.search("hell"))
console.log(obj.search("leetcoded"))


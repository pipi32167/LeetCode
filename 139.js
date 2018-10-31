var isMatch = function (s, i, wordDict2, minLen, maxLen, cache = {}) {
  
  if (i >= s.length) {
    return true
  }

  if (cache[i] !== undefined) {
    return cache[i]
  }

  for(var j = minLen; j <= maxLen; j++) {
    if (wordDict2[s.substr(i, j)] && isMatch(s, i + j, wordDict2, minLen, maxLen, cache)) {
      return true
    }
  }
  
  cache[i] = false
  return false
}

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
  var wordDict2 = {}
  var minLen = Math.pow(2,31), maxLen = 0
  for(var i = 0; i < wordDict.length; i++) {
    var word = wordDict[i]
    wordDict2[word] = true
    if (maxLen < word.length) {
      maxLen = word.length
    }
    if (minLen > word.length) {
      minLen = word.length
    }
  }

  return isMatch(s, 0, wordDict2, minLen, maxLen)
};

s = "leetcode", wordDict = ["leet", "code"]
console.log(wordBreak(s, wordDict), true);
s = "applepenapple", wordDict = ["apple", "pen"]
console.log(wordBreak(s, wordDict), true);
s = "catsandog", wordDict = ["cats", "dog", "sand", "and", "cat"]
console.log(wordBreak(s, wordDict), false);
s = "aaaaaaa", wordDict = ["aaaa","aaa"]
console.log(wordBreak(s, wordDict), true);
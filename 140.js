var match = function (s, i, wordDict2, minLen, maxLen) {
  // console.log('match s:', s.substring(i));
  if (i >= s.length) {
    return [[]]
  }

  var result = []
  for(var j = minLen; j <= maxLen && i + j <= s.length; j++) {
    var word = s.substr(i, j)
    // console.log({word});
    if (wordDict2[word]) {
      var suffixes = match(s, i + j, wordDict2, minLen, maxLen)
      // console.log(suffixes);
      for(var k = 0; k < suffixes.length; k++) {
        var suffix = suffixes[k]
        result.push([word].concat(suffix))
      }
    }
  }
  // console.log(result);
  return result
}

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
  if (!isMatch(s, 0, wordDict2, minLen, maxLen)) {
    return []
  }

  // console.log({minLen, maxLen});
  var result = match(s, 0, wordDict2, minLen, maxLen)
  result = result.map(function (elem) {
    return elem.join(' ')
  })
  return result
  // return result.length
};

s = "catsanddog"
wordDict = ["cat", "cats", "and", "sand", "dog"]
console.log(wordBreak(s, wordDict));
s = "pineapplepenapple"
wordDict = ["apple", "pen", "applepen", "pine", "pineapple"]
console.log(wordBreak(s, wordDict));
s = "catsandog"
wordDict = ["cats", "dog", "sand", "and", "cat"]
console.log(wordBreak(s, wordDict));
s = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
// s = "aaaaaaaaaaaaaaaaaaaa"
wordDict = ["a","aa","aaa","aaaa","aaaaa","aaaaaa","aaaaaaa","aaaaaaaa","aaaaaaaaa","aaaaaaaaaa"]
console.log(wordBreak(s, wordDict));
s = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabaabaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
wordDict = ["aa","aaa","aaaa","aaaaa","aaaaaa","aaaaaaa","aaaaaaaa","aaaaaaaaa","aaaaaaaaaa","ba"]
console.log(wordBreak(s, wordDict));
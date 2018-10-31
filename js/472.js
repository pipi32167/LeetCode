var isMatch = function (s, wordIdx, i, wordsDict, minLen, maxLen, prefix = [])  {
  // console.log({ s, snow: s.substring(i) });

  if (i >= s.length) {
    // console.log({i, s, prefix});
    return prefix.length
  }
  
  for(var j = minLen; j <= maxLen; j++) {
    var word = s.substr(i, j)
    var idx = wordsDict[word]
    // console.log({ word, i, j, idx, exists: prefix.indexOf(idx) >= 0 });
    if (idx === undefined || wordIdx === idx) {
      continue
    }
    var res = false
    // if (prefix.indexOf(idx) >= 0) {
    //   res = isMatch(s, wordIdx, i+j, wordsDict, minLen, maxLen, prefix)
    // } else {
      res = isMatch(s, wordIdx, i+j, wordsDict, minLen, maxLen, prefix.concat(idx))
    // }
    if (res) {
      return res
    }
  }
  return 0
}

/**
 * @param {string[]} words
 * @return {string[]}
 */
var findAllConcatenatedWordsInADict = function(words) {
  
  var hasEmptyStr = false
  var wordsDict = {}, minLen = Math.pow(2,31), maxLen = 0
  for(var i = 0; i < words.length; i++) {
    var word = words[i]
    if (word.length === 0) {
      hasEmptyStr = true
      continue
    }
    wordsDict[word] = i
    if (minLen > word.length) {
      minLen = word.length
    }
    if (maxLen < word.length) {
      maxLen = word.length
    }
  }

  // console.log({ minLen, maxLen });
  var result = []
  for(var i = 0; i < words.length; i++) {
    var wordCount = isMatch(words[i], i, 0, wordsDict, minLen, maxLen)
    // if (hasEmptyStr && wordCount > 0 || !hasEmptyStr && wordCount > 1) {
    if(wordCount > 0) {
      result.push(words[i])
    }
  }
  return result
};

var words = ["cats","catsdogcats","dog"]
console.log(findAllConcatenatedWordsInADict(words));
var words = ["cat","cats","catsdogcats","dog","dogcatsdog","hippopotamuses","rat","ratcatdogcat", 'catscatscats']
console.log(findAllConcatenatedWordsInADict(words));
var words = ["a","b","ab","abc"]
console.log(findAllConcatenatedWordsInADict(words));
var words = require('./472_input')
console.log(findAllConcatenatedWordsInADict(words));
var words = require('./472_input2')
// console.log(words.filter(e => e.length === 3));
console.log(findAllConcatenatedWordsInADict(words));
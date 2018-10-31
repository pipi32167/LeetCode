var isMatch = function (s1, i1, s2, i2, len) {
  
  for(var i = 0; i < len; i ++) {
    if (s1[i+i1] !== s2[i+i2]) {
      return false
    }
  }
  return true
}

var go = function (s, start, i, words, result) {
  // console.log('go', start, i, words);
  if(words.length === 0) {
    result.push(start)
    return true
  }

  for(var j = 0; j < words.length; j++) {
    var word = words[j]
    // console.log('isMatch', s.substr(i, word.length), word, isMatch(s, i, word, 0, word.length));
    if (isMatch(s, i, word, 0, word.length)) {
      var newWords = words.slice(0)
      newWords.splice(j, 1)
      if (go(s, start, i+word.length, newWords, result)) {
        return true
      }
    }
  }
  return false
}

var unique = function (words) {
  var result = {}
  for(var i = 0; i < words.length; i++) {
    result[words[i]] = true
  }
  return Object.keys(result)
}

/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {
  if (words.length === 0) {
    return []
  }
  
  var totalLen = words.reduce((sum, elem) => sum + elem.length, 0)
  // console.log({ totalLen, len: s.length });
  if (totalLen > s.length) {
    return []
  }

  var uniWords = unique(words)
  var result = []  
  for(var i = 0; i < s.length; i++) {
    if(go(s, i, i, uniWords, result)) {
      break
    }
  }
  if (result.length === 0) {
    return []
  }

  result = []
  for(var i = 0; i < s.length; i++) {
    go(s, i, i, words, result)
  }
  return result
};
s = "barfoothefoobarman",
words = ["foo","bar"]
console.log(findSubstring(s, words), [0, 9]);
s = "wordgoodstudentgoodword",
words = ["word","student"]
console.log(findSubstring(s, words), []);
s = "wordgoodgoodgoodbestword"
words = ["word","good","best","good"]
console.log(findSubstring(s, words), [8]);
s = "a"
words = []
console.log(findSubstring(s, words), []);
var { s, words } = require('./30_input')
console.log(findSubstring(s, words), []);
var { s, words } = require('./30_input2')
console.log(findSubstring(s, words), []);
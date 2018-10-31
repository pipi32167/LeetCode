var cache = {}

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
  if (cache[s] !== undefined) {
    return cache[s] 
  }
  
  if (s.length > t.length) {
    cache[s] = false
    return false
  }
  var j = 0
  for(var i = 0; i < s.length; i++) {
    var hit = false
    while(j < t.length) {
      if (s[i] === t[j++]) {
        hit = true
        break
      }
    }
    if (!hit) {
      cache[s] = false
      return false
    }
  }
  cache[s] = true
  return true
};
/**
 * @param {string} S
 * @param {string[]} words
 * @return {number}
 */
var numMatchingSubseq = function(S, words) {
  cache = {}
  var count = 0
  for(var i = 0; i < words.length; i++) {
    if (isSubsequence(words[i], S)) {
      count++
    }
  }
  return count
};

var S = 'abcde', words = ["a", "bb", "acd", "ace"]
console.log(numMatchingSubseq(S, words), 3);

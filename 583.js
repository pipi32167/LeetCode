var find = function (word, start, char) {
  for(var i = start; i < word.length; i++ ) {
    if (word[i] === char) {
      return i
    }
  }
  return -1
}

var findMaxResult = function (word1, start1, word2, start2, cache = {}) {
  var key = start1 + ',' + start2
  if (cache[key]) {
    return cache[key]
  }
  if (start1 >= word1.length || start2 >= word2.length) {
    cache[key] = []
    return []
  }
  
  var idx = find(word2, start2, word1[start1])
  var result = findMaxResult(word1, start1 + 1, word2, start2, cache)
  if (idx >= 0) {
    var result2 = [start1].concat(findMaxResult(word1, start1 + 1, word2, idx + 1, cache))
    result = result.length > result2.length ? result : result2
  }
  cache[key] = result
  return result
}

var findMaxResult2 = function (word1, word2) {
  return findMaxResult(word1, 0, word2, 0).map(elem => word1[elem]).join('')
}

// console.log(findMaxResult2("abcdxabcde", "abcdeabcdx"));
// console.log(findMaxResult2('sea', 'eat'), 'ea');
// console.log(findMaxResult2('seat', 'eat'), 'ea');
// console.log(findMaxResult2('tae', 'eat'), 'a');
// console.log(findMaxResult2('park', 'spake'), 'pak');
// console.log(findMaxResult2('intention', 'execution'), 'etion');
// console.log(findMaxResult2('execution', 'intention'), 'etion');
// console.log(findMaxResult2("abcdxabcde", "abcdeabcdx"), 'abcdabcd');
// console.log(findMaxResult2("pneumonoultramicroscopicsilicovolcanoconiosis", "stereomicroscopically"), 'trmicroscopicll');


/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
  if (word1.length === 0 || word2.length === 0) {
    return Math.abs(word1.length - word2.length)
  }
  if (word1.length > word2.length) {
    var tmp = word1
    word1 = word2
    word2 = tmp
  }
  var maxLen = findMaxResult(word1, 0, word2, 0).length
  return word1.length + word2.length - 2 * maxLen
};

console.log(minDistance('sea', 'eat'), 2);
console.log(minDistance('', ''), 0);
console.log(minDistance('park', 'spake'), 3);
console.log(minDistance("intention", "execution"), 8);
console.log(minDistance("abcdxabcde", "abcdeabcdx"), 4);
console.log(minDistance("dinitrophenylhydrazine", "dimethylhydrazine"), 9);
console.log(minDistance("pneumonoultramicroscopicsilicovolcanoconiosis", "stereomicroscopically"), 36);
console.log(minDistance("szwokpjlgqgogbgpjaczcmtjhzgldwinqfxbcxgghitcinmtdwnnpsmnmhfrhrgwncvcizaze","spjlqggpzcgdxxtdwnrvca"), 51)

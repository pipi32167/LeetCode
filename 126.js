var isMatch = function (word1, word2) {
  
  var count = 0
  for(var i = 0; i < word1.length; i++) {
    if (word1[i] !== word2[i]) {
      count++
    }
  }
  return count === 1
}

var collect = function (nextList, dp, endIdx, idx, prefix, result) {

  if (endIdx === idx) {
    result.push(prefix.slice(0))
    return
  }
  
  var nextIdxList = nextList[idx]
  if (nextIdxList.length === 0) {
    return
  }
  var minStep = Math.min.apply(null, nextIdxList.map(elem => dp[elem]))
  for(var i = 0; i < nextIdxList.length; i++) {
    var nextIdx = nextIdxList[i]
    if (minStep === dp[nextIdx]) {
      prefix.push(nextIdx)
      collect(nextList, dp, endIdx, nextIdx, prefix, result)
      prefix.pop() 
    }
  }
}

/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {string[][]}
 */
var findLadders = function(beginWord, endWord, wordList) {

  var beginIdx = wordList.indexOf(beginWord)
  if(beginIdx < 0) { 
    wordList.unshift(beginWord) 
    beginIdx = 0
  }
  //判断endWord在不在wordList里
  var nextList = new Array(wordList.length).fill(0).map(() => [])
  var endIdx = -1
  for(var i = 0; i < wordList.length; i++) {
    if (endIdx === -1 && wordList[i] === endWord) {
      endIdx = i
    }
    for(var j = i+1; j < wordList.length; j++) {
      if (isMatch(wordList[i], wordList[j])) {
        nextList[i].push(j)
        nextList[j].push(i)
      }
    }
  }

  // console.log({nextList});
  if (endIdx === -1) {
    return []
  }
  
  var MAX = nextList.length + 1
  var dp = new Array(nextList.length).fill(MAX) 
  dp[endIdx] = 1
  var handleList = [endIdx]
  while(handleList.length > 0) {
    var nowIdx = handleList.shift()
    nextList[nowIdx].forEach(elem => {
      if (dp[elem] === MAX) {
        dp[elem] = dp[nowIdx] + 1
        handleList.push(elem)
      }
    })
  }

  if (dp[beginIdx] === MAX) {
    return []
  }

  var result = []
  collect(nextList, dp, endIdx, beginIdx, [beginIdx], result)
  result = result.map(elem => elem.map(elem => wordList[elem]))
  return result
};

beginWord = "hit",
endWord = "cog",
wordList = ["hot","dot","dog","lot","log","cog"]
console.log(findLadders(beginWord, endWord, wordList));
beginWord = "hit"
endWord = "cog"
wordList = ["hot","dot","dog","lot","log"]
console.log(findLadders(beginWord, endWord, wordList));
beginWord = "hit"
endWord = "cog"
wordList = ["hot","dot","lot","cog"]
console.log(findLadders(beginWord, endWord, wordList));
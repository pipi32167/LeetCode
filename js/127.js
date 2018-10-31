var isMatch = function (word1, word2) {
  
  var count = 0
  for(var i = 0; i < word1.length; i++) {
    if (word1[i] !== word2[i]) {
      count++
    }
  }
  return count === 1
}

// var getMinLength = function (wordList, nextList, endIdx, idx, prefix, cache = []) {
//   // console.log(idx);
  
//   if (cache[idx] !== undefined) {
//     // console.log('hit', idx, cache[idx]);
//     return cache[idx]
//   }

//   if(endIdx === idx) {
//     // console.log('%j', prefix);
//     // console.log('%j', prefix.map(elem => wordList[elem]));
//     cache[idx] = 1
//     return 1
//   }

//   var nextIdxList = nextList[idx]
//   // console.log({ idx, nextIdxList, prefix });
  
//   var min = nextList.length
//   for(var i = 0; i < nextIdxList.length; i++) {
//     var nextIdx = nextIdxList[i]
//     if (prefix.indexOf(nextIdx) < 0) {
//       prefix.push(nextIdx)
//       var res = getMinLength(wordList, nextList, endIdx, nextIdx, prefix, cache)
//       prefix.pop()
//       min = Math.min(min, res)
//       console.log(min);
//     }
//   }

//   if (min < nextList.length) {
//     console.log(idx, min);
//   }
//   cache[idx] = 1 + min
//   return 1 + min
// }

// var go = function (wordList, nextList, endIdx, idx, prefix, result) {
//   // console.log({idx});
//   // if (cache[idx]) {
//   //   return cache[idx]
//   // }
  
//   if(endIdx === idx) {
//     if (result.minLen > prefix.length) {
//       result.minLen = prefix.length
//     }
//     return
//   }

//   if (result.minLen < prefix.length) {
//     return
//   }

//   var nextIdxList = nextList[idx]
//   // console.log({ idx, nextIdxList, prefix });
//   var min = nextList.length
//   for(var i = 0; i < nextIdxList.length; i++) {
//     var nextIdx = nextIdxList[i]
//     if (prefix.indexOf(nextIdx) < 0) {
//       prefix.push(nextIdx)
//       go(wordList, nextList, endIdx, nextIdx, prefix, result)
//       prefix.pop()
//     }
//   }
// }

/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
  
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
    return 0
  }
  
  // var cache = []
  // var res = getMinLength(wordList, nextList, endIdx, beginIdx, [beginIdx], cache)
  // // console.log({cache});
  // return res > nextList.length ? 0 : res
  // var result = { minLen: nextList.length + 1 }
  // go(wordList, nextList, endIdx, beginIdx, [beginIdx], result)
  // return result.minLen === nextList.length + 1 ? 0 : result.minLen

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

  return dp[beginIdx] === MAX ? 0 : dp[beginIdx]
};

beginWord = "hot"
endWord = "dog"
wordList = ["hot","dog","dot"]
console.log(ladderLength(beginWord, endWord, wordList), 3);
return
beginWord = "hit",
endWord = "hao",
wordList = ["hit", "ait","aat","aao", "hat","hao"]
console.log(ladderLength(beginWord, endWord, wordList), 3);
beginWord = "hit",
endWord = "cog",
wordList = ["hot","dot","dog","lot","log","cog"]
console.log(ladderLength(beginWord, endWord, wordList), 5);
beginWord = "hit"
endWord = "cog"
wordList = ["hot","dot","dog","lot","log"]
console.log(ladderLength(beginWord, endWord, wordList), 0);
beginWord = "hit"
endWord = "cog"
wordList = ["dot","dog","lot","log"]
console.log(ladderLength(beginWord, endWord, wordList), 0);
var {
  beginWord,
  endWord,
  wordList,
} = require('./129_input').params1
console.log(ladderLength(beginWord, endWord, wordList), 11);
var {
  beginWord,
  endWord,
  wordList,
} = require('./129_input').params2
// console.log(wordList.length);
console.log(ladderLength(beginWord, endWord, wordList), 11);

/**
 * @param {string} S
 * @param {character} C
 * @return {number[]}
 */
var shortestToChar = function(S, C) {
  
  var poses = []
  for(var i = 0; i < S.length; i ++) {
    if (S[i] === C) {
      poses.push(i)
    }
  }

  var result = []
  for(var i = 0; i < S.length; i ++) {
    var minLen = S.length
    for(var j = 0; j < poses.length; j++) {
      var pos = poses[j]
      var len = Math.abs(i-pos)
      if (minLen > len) {
        minLen = len
      }
    }
    result.push(minLen)
  }
  return result
};

console.log(shortestToChar('loveleetcode', 'e'), [3, 2, 1, 0, 1, 0, 0, 1, 2, 2, 1, 0]);

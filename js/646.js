/**
 * @param {number[][]} pairs
 * @return {number}
 */
var findLongestChain = function(pairs) {
    
  if (pairs.length <= 1) {
    return pairs.length
  }

  pairs = pairs.sort(function (a, b) {
    return a[0] - b[0]
  })

  var maxLen = new Array(pairs.length).fill(1)
  for(var i = pairs.length - 2; i >= 0; i --) {
    for(var j = i + 1; j < pairs.length; j++) {
      if (pairs[i][1] < pairs[j][0]) {
        maxLen[i] = Math.max(maxLen[i], maxLen[j] + 1)
      }
    }
  }

  return Math.max.apply(null, maxLen)
};

console.log(findLongestChain([]));
console.log(findLongestChain([[1,2]]));
console.log(findLongestChain([[1,2], [2,3], [3,4], [5,6]]));

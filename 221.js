var isValid = function (matrix, i, j, len) {
  
  for(var k = i; k < i + len; k++) {
    for(var l = j; l < j + len; l++) { 
      if (matrix[k][l] !== '1') {
        return false
      }
    }
  }
  return true
}

/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
  var m = matrix.length
  if (m === 0) {
    return 0
  }
  var n = matrix[0].length
  // console.log({ m, n });
  
  var cache = {}
  var maxLen = m < n ? m : n
  var dp = new Array(maxLen+1).fill(0).map(() => new Array(m).fill(0).map(() => new Array(n).fill(0)))
  var result = 0
  for(var k = 1; k <= maxLen; k++) {
    for(var i = 0; i <= m - k; i++) {
      for(var j = 0; j <= n - k; j++) {
        dp[k][i][j] = Math.max(
          dp[k-1][i][j],
          i === m - k ? 0 : dp[k-1][i+1][j],
          j === n - k ? 0 : dp[k-1][i][j+1],
          (i === m - k || j === n - k) ? 0: dp[k-1][i+1][j+1]
        )
        // console.log({ i, j, k, isValid: isValid(matrix, i, j, k) });
        
        if (dp[k][i][j] === k-1 && isValid(matrix, i, j, k)) {
          dp[k][i][j] = k
        }
        if (result < dp[k][i][j]) {
          result = dp[k][i][j]
        }
      }
    }
  }
  // console.log(dp);
  return result * result
};

var matrix = [
['1', '0', '1', '0', '0'],
['1', '0', '1', '1', '1'],
['1', '1', '1', '1', '1'],
['1', '0', '0', '1', '0'],
]
console.log(maximalSquare(matrix), 4);
var matrix = [
  ['1', '0', '0', '0', '0'],
  ['1', '1', '1', '1', '1'],
  ['1', '1', '1', '1', '1'],
  ['1', '1', '1', '1', '1'],
]
console.log(maximalSquare(matrix), 9);
var matrix = [
  ['1', '1', '1'],
  ['1', '1', '1'],
  ['1', '1', '1'],
]
console.log(maximalSquare(matrix), 9);
var matrix = [
  ['0', '1', '1'],
  ['1', '1', '1'],
  ['1', '1', '1'],
]
console.log(maximalSquare(matrix), 4);
console.log(maximalSquare([]), 0);
console.log(maximalSquare(require('./221_input')), 36);
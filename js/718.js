

/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
var findLength = function(A, B) {

  var m = A.length, n = B.length
  if (m === 0 || n === 0) {
    return 0
  }
  var dp = new Array(m + 1)
  for(var i = 0; i < dp.length; i++) {
    dp[i] = new Array(n + 1).fill(0)
  }
  var max = 0
  for(var i = m - 1; i >= 0; i--) {
    for(var j = n - 1; j >= 0; j--) {
      dp[i][j] = A[i] === B[j] ? (1 + dp[i+1][j+1]) : 0
      max = Math.max(max, dp[i][j])
    }
  }
  return max
};

var A = [1,2,3,2,1], B = [3,2,1,4,7]
console.log(findLength(A, B), 3);
var A = [0,1,1,1,1], B = [1,0,1,0,1]
console.log(findLength(A, B), 2);
var { A, B } = require('./718_input')
console.log(findLength(A, B), 2);

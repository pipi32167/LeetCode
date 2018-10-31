var go = function (A, sum, prefix, result) {
  // console.log('go', {sum, prefix});
  if (prefix.length >= A.length) {
    if (result.min > sum) {
      result.min = sum
    }
    return
  }

  if (result.min <= sum) {
    return
  }

  let lastIdx = prefix[prefix.length - 1]
  let col = prefix.length
  for (let i = -1; i <= 1; i++) {
    let j = lastIdx + i
    if (j >= 0 && j < A.length) {
      prefix.push(j)
      go(A, sum + A[col][j], prefix, result)
      prefix.pop()
    }
  }
}

/**
 * @param {number[][]} A
 * @return {number}
 */
var minFallingPathSum = function (A) {

  for (let i = 0; i < A.length; i++) {
    for (var j = 0; j < A[0].length; j++) {
      A[i][j] += 100
    } 
  }

  var result = {
    min: Math.pow(2, 31)
  }
  for (var i = 0; i < A[0].length; i++) {
    go(A, A[0][i], [i], result)
  }
  return result.min - 100 * A.length
};


/**
 * @param {number[][]} A
 * @return {number}
 */
var minFallingPathSum = function (A) {

  var dp = new Array(A.length).fill(0).map(() => new Array(A[0].length).fill(100))
  for (let i = 0; i < A[0].length; i++) {
    dp[0][i] = A[0][i]
  }

  for (let i = 1; i < dp.length; i++) {
    for (let j = 0; j < A[0].length; j++) {
      for(let k = -1; k <= 1; k++) {
        let k2 = j+k
        if (k2 >= 0 && k2 < A[0].length) {
          dp[i][j] = Math.min(dp[i][j], A[i][j] + dp[i-1][k2])
        }
      }
    }
  }
  return Math.min.apply(null, dp[dp.length-1])
};


var A = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]
console.log(minFallingPathSum(A) === 12);
var A = [
  [0]
]
console.log(minFallingPathSum(A) === 0);
var A = [
  [0, 0, 0, 0],
  [1, 1, 2, 1],
  [0, 0, -2, 0],
]
console.log(minFallingPathSum(A) === -1);
var A = new Array(100).fill(0).map(() => new Array(100).fill(0))
console.log(minFallingPathSum(A) === 0);
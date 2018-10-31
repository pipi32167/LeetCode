

/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
  
  var dp = new Array(n+1).fill(0)
  for (let i = 1; i <= n; i++) {
    const sqrt = Math.floor(Math.sqrt(i))
    if (sqrt * sqrt === i) {
      dp[i] = 1
      continue
    }

    dp[i] = dp[i-1] + 1
    for (let j = Math.floor(i / 2); j < i; j++) {
      // console.log({ j, k: i-j });
      dp[i] = Math.min(dp[i], dp[j] + dp[i-j])
    }
  }

  // console.log(dp);
  return dp[n]
};

console.log(numSquares(1) === 1);
console.log(numSquares(2) === 2);
console.log(numSquares(12) === 3);
console.log(numSquares(10000) === 3);

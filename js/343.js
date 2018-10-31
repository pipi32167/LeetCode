/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function(n) {
  
  let dp = new Array(n+1).fill(0)
  for (let i = 1; i <= n; i++) {
    const l = Math.floor(Math.sqrt(i))
    for (let j = i-1; j >= l; j--) {
      dp[i] = Math.max(dp[i], Math.max(j, dp[j]) * Math.max(i-j, dp[i-j]))
    }
  }
  // console.log(dp);
  return dp[n]
};

console.log(integerBreak(2) === 1);
console.log(integerBreak(10) === 36);
console.log(integerBreak(100) , 36);

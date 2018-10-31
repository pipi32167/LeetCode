// var tmp = {}

// /**
//  * @param {number} m
//  * @param {number} n
//  * @return {number}
//  */
// var uniquePaths = function(m, n) {
//   if (tmp[m] && tmp[m][n]) {
//     return tmp[m][n]
//   }
//   var res
//   if (m === 1 && n === 1) {
//     res = 1
//   } else if (m > 1 && n === 1) {
//     res = uniquePaths(m - 1, n)
//   } else if (m === 1 && n > 1) {
//     res = uniquePaths(m, n - 1)
//   } else {
//     res = uniquePaths(m - 1, n) + uniquePaths(m, n - 1)
//   }
//   tmp[m] = tmp[m] || {}
//   tmp[m][n] = res
//   return res
// };


// /**
//  * @param {number} m
//  * @param {number} n
//  * @return {number}
//  */
// var uniquePaths = function(m, n) {

//   var dp = new Array(m+1).fill(0).map(() => new Array(n+1).fill(0))
//   dp[0][1] = 1
//   for (let i = 1; i <= m; i++) {
//     for (let j = 1; j <= n; j++) {
//       dp[i][j] = dp[i-1][j] + dp[i][j-1]
//     }
//   }
//   // console.log(dp);
//   return dp[m][n]
// };

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {

  var dp = new Array((m + 1) * (n + 1)).fill(0)
  dp[1] = 1
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      dp[i * (n+1) + j] = dp[(i-1) * (n+1) + j] + dp[i * (n+1) + j-1]
    }
  }
  // console.log(dp);
  return dp[(m + 1) * (n + 1) - 1]
};


console.log(uniquePaths(2,2) === 2);
console.log(uniquePaths(7,3) === 28);
console.log(uniquePaths(20,11) === 20030010);
console.log(uniquePaths(23,12) === 193536720);

// console.log(count);



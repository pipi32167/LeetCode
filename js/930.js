/**
 * @param {number[]} A
 * @param {number} S
 * @return {number}
 */
var numSubarraysWithSum = function(A, S) {
  
  let dp = new Array(A.length+1).fill(0)
  let sum = 0
  for (let i = 0; i < A.length; i++) {
    sum += A[i]
    dp[i+1] = sum
  }
  // console.log(dp);
  let count = 0;
  for (let i = 0; i <= A.length; i++) {
    for (let j = i+1; j <= A.length; j++) {
      // console.log({ i, j, res: dp[j] - dp[i] });
      if (dp[j] - dp[i] > S) {
        break
      }
      if (dp[j] - dp[i] === S) {
        count++
      }
    }
  }
  return count
};

var A = [1,0,1,0,1], S = 2
console.log(numSubarraysWithSum(A, S) === 4);
var A = [0,0], S = 0
console.log(numSubarraysWithSum(A, S) === 3);
var A = new Array(30000).fill(0), S = 0
console.log(numSubarraysWithSum(A, S) , 30000);
var A = new Array(30000).fill(1), S = 1
console.log(numSubarraysWithSum(A, S) === 30000);
var A = new Array(30000).fill(1), S = 0
console.log(numSubarraysWithSum(A, S) === 0);

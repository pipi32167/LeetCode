/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
  
  var dp = new Array(nums.length).fill(Math.pow(2, 31))
  dp[dp.length - 1] = 0
  for(var i = nums.length - 2; i >= 0; i--) {
    var minLen = Math.min(nums.length - 1, i + nums[i])
    for(var j = minLen; j >= i + 1; j--) {
      // console.log({ i, j, dpi: dp[i], dpj: dp[j] });
      dp[i] = Math.min(dp[i], 1 + dp[j])
      if (dp[i] <= 2) {
        break
      }
    }
    // console.log({ i, dp });
  }
  // console.log(dp);
  return dp[0]
};

console.log(jump([2,3,1,1,4]), 2);
console.log(jump([2,3,0,1,4]), 2);
console.log(jump([2,1]), 1);

var { nums } = require('./45_input')
console.log(jump(nums), 2);
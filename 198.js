/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    
  var dp = new Array(nums.length + 2).fill(0)
  for(var i = 2; i < dp.length; i++) {
    dp[i] = Math.max(dp[i-1], nums[i-2] + dp[i-2])
  }
  // console.log(dp);
  return dp[dp.length-1]
};

console.log(rob([1,2,3,1]), 4);
console.log(rob([2,7,9,3,1]), 12);
console.log(rob([2,1,4,9,1]), 11);

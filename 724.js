/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
  
  var dp = new Array(nums.length + 1).fill(0)
  var sum = 0
  for(var i = 0; i < nums.length; i++) {
    sum += nums[i]
    dp[i+1] = sum
  }
  // console.log(dp);
  for(var i = 0; i < dp.length; i++) {
    // console.log(dp[i-1], dp[dp.length - 1] - dp[i]);
    if (dp[i-1] === (dp[dp.length - 1] - dp[i])) {
      return i-1
    }
  }
  return -1
};


console.log(pivotIndex([1, 7, 3, 6, 5, 6]), 3);
console.log(pivotIndex([1, 2, 3]), -1);

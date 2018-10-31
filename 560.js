/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
  var dp = new Array(nums.length+1).fill(0)
  var sum = 0
  for(var i = 0; i < nums.length; i++) {
    sum += nums[i]
    dp[i+1] = sum
  }
  // console.log(dp);
  var count = 0
  for(var i = 0; i < dp.length; i++) {
    for(var j = i+1; j < dp.length; j++) {
      if (dp[j] - dp[i] === k) {
        count++
      }
    }
  }
  return count
};

nums = [1,1,1], k = 2
console.log(subarraySum(nums, k), 2);

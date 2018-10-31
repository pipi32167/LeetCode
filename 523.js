/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function(nums, k) {
    
  var dp = new Array(nums.length + 1).fill(0)
  var sum = 0
  for(var i = 0; i < nums.length; i++) {
    sum += nums[i]
    dp[i+1] = sum
  }

  for(var i = 0; i < dp.length; i++) {
    for(var j = i+2; j < dp.length; j++) {
      var res = dp[j] - dp[i]
      // console.log({ i, j, res, res2: res % k });
      if (k === 0 && res === 0 || res % k === 0) {
        return true
      }
    }
  }
  return false
};

var nums = [23,2,4,6,7], k = 6
console.log(checkSubarraySum(nums, k), true);
var nums = [23,2,6,4,7], k = 6
console.log(checkSubarraySum(nums, k), true);
var nums = [23,2,6,4,7], k = 24
console.log(checkSubarraySum(nums, k), false);
var nums = [0, 0], k = 0
console.log(checkSubarraySum(nums, k), true);
var nums = [23,2,6,4,7], k = 0
console.log(checkSubarraySum(nums, k), false);

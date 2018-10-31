/**
 * @param {number[]} nums
 * @return {number[]}
 */
var largestDivisibleSubset = function(nums) {

  if (nums.length === 0) {
    return []
  }
  if (nums.length === 1) {
    return nums
  }
  
  var dp = new Array(nums.length).fill(0)
  nums = nums.sort(function (a, b) {
    return a - b
  })
  var dpPlans = new Array(nums.length)
  for(var i = 0; i < dpPlans.length; i++) {
    dpPlans[i] = []
  }

  var max = 0, maxIdx, maxPlan
  for(var i = 1; i < nums.length; i++) {
    for(var j = i - 1; j >= 0; j--) {
      if (nums[i] % nums[j] === 0) {
        if (dp[i] < 1 + dp[j]) {
          dp[i] = 1 + dp[j]
          dpPlans[i] = dpPlans[j].concat([nums[j]])
          if (max < dp[i]) {
            max = dp[i]
            maxIdx = i
            maxPlan = dpPlans[i]
          }
        }
      }
    }
  }

  // console.log({nums, dpPlans, max, maxIdx, maxPlan});
  if (!maxPlan) {
    return [nums[0]]
  }
  return maxPlan.concat([nums[maxIdx]])
};

console.log(largestDivisibleSubset([1,2,3]));
console.log(largestDivisibleSubset([1,2,4,8]));
console.log(largestDivisibleSubset([1]));
console.log(largestDivisibleSubset([1,2]));
console.log(largestDivisibleSubset([2,3]));

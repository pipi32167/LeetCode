/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    
  if (nums.length === 0) {
    return 0
  }
  if (nums.length === 1) {
    return nums[0]
  }
  var dp1 = new Array(nums.length).fill(0)
  dp1[0] = nums[0]
  dp1[1] = nums[0]
  for(var i = 2; i < dp1.length-1; i++) {
    dp1[i] = Math.max(dp1[i-1], nums[i] + dp1[i-2])
  }
  dp1[i] = dp1[i-1]
  var dp2 = new Array(nums.length).fill(0)
  dp2[1] = nums[1]
  for(var i = 2; i < dp2.length; i++) {
    dp2[i] = Math.max(dp2[i-1], nums[i] + dp2[i-2])
  }
  // console.log(dp1, dp2);
  return Math.max(dp1[dp1.length-1], dp2[dp2.length-1])
};


console.log(rob([]), 0);
console.log(rob([1]), 1);
console.log(rob([1,2]), 2);
console.log(rob([2,3,2]), 3);
console.log(rob([1,2,3,1]), 4);
console.log(rob([1,2,2,3,4]), 6);
/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function(nums) {
    
  if (nums.length <= 1) {
    
    return nums.length
  }

  var maxLen = new Array(nums.length).fill(1)
  for(var i = nums.length - 2; i >= 0; i --) {
    if (nums[i] < nums[i + 1]) {
      maxLen[i] = maxLen[i + 1] + 1
    }
  }

  return Math.max.apply(null, maxLen)
};

console.log(findLengthOfLCIS([]));
console.log(findLengthOfLCIS([1]));
console.log(findLengthOfLCIS([1,3,5,4,7]));
console.log(findLengthOfLCIS([2,2,2,2,2]));

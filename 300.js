
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
  if (nums.length <= 1) {
    return nums.length;
  }

  var maxLen = new Array(nums.length).fill(1)
  for(var i = nums.length - 2; i >= 0; i--) {

    for(var j = i + 1; j < nums.length; j++) {
      if (nums[i] < nums[j]) {
        maxLen[i] = Math.max(maxLen[i], maxLen[j] + 1)
      }
    }
  }

  // console.log(nums);
  // console.log(maxLen);
  return Math.max.apply(null, maxLen)
};

console.log(lengthOfLIS([10,9,2,5,3,7,101,18]));
console.log(lengthOfLIS([1]));
console.log(lengthOfLIS([]));
console.log(lengthOfLIS([5,4,3,2,1]));
console.log(lengthOfLIS([10,9,2,5,3,4]));
console.log(lengthOfLIS([1,3,6,7,9,4,10,5,6]));
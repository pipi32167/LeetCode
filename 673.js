/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumberOfLIS = function(nums) {

  if (nums.length <= 1) {
    return nums.length
  }

  var maxLen = new Array(nums.length).fill(1)
  var maxLenCount = new Array(nums.length).fill(0)
  for(var i = nums.length - 1; i >= 0; i --) {
    for(var j = i + 1; j < nums.length; j++) {
      if (nums[i] < nums[j]) {
        maxLen[i] = Math.max(maxLen[i], maxLen[j] + 1)
      }
    }
    var hit = false
    for(var j = i + 1; j < nums.length; j++) {
      if (nums[i] < nums[j] && maxLen[i] === maxLen[j] + 1) {
        hit = true
        maxLenCount[i] += maxLenCount[j]
      }
    }
    if (!hit) {
      maxLenCount[i] = 1
    }
  }
  
  // console.log( nums );
  // console.log( maxLen );
  // console.log( maxLenCount );
  
  var max = Math.max.apply(null, maxLen)
  var count = maxLenCount.reduce(function (memo, elem, idx) {
    if(maxLen[idx] === max) {
      return memo + elem
    }
    return memo
  }, 0)
  
  return count
};

console.log(findNumberOfLIS([]));
console.log(findNumberOfLIS([1]));
console.log(findNumberOfLIS([1,3,5,4,7]));
console.log(findNumberOfLIS([2,2,2,2,2]));

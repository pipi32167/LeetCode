
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {
  
  var len = nums.length
  var result = []
  for(var i = 0; i < len; i++) {
    for(var j = 0; j < len; j++) {
      var j2 = (j + i + 1) % len
      if (nums[j2] > nums[i]) {
        result.push(nums[j2])
        break
      }
    }
    if (j >= len) {
      result.push(-1)
    }
  }
  return result
};

console.log(nextGreaterElements([1,2,1]), [2,-1,2]);


/**
 * @param {number[]} findNums
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElement = function(findNums, nums) {
    
  var result = []
  for(var i = 0; i < findNums.length; i++) {
    var idx = nums.indexOf(findNums[i])
    if (idx === -1) {
      result.push(idx)
      continue
    }
    for(var j = idx + 1; j < nums.length; j++) {
      if (nums[j] > findNums[i]) {
        result.push(nums[j])
        break
      }
    }
    if (j >= nums.length) {
      result.push(-1)
    }
  }
  return result
};

var nums1 = [4,1,2], nums2 = [1,3,4,2]
console.log(nextGreaterElement(nums1, nums2), [-1,3,-1]);

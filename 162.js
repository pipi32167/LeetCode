/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {

  if (nums.length === 1) {
    return 0
  }

  var pos = 0
  if (nums[pos] > nums[pos + 1]) {
    return pos
  }
  
  for(var i = 1; i < nums.length - 1; i++) {
    if (nums[i] > nums[i - 1] && nums[i] > nums[i + 1]) {
      return i;
    }
  }

  pos = nums.length - 1
  if (nums[pos] > nums[pos - 1]) {
    return pos
  }
};

console.log(findPeakElement([1,2,3,1]));
console.log(findPeakElement([1,2,1,3,5,6,4]));
console.log(findPeakElement([1,2,3]));
console.log(findPeakElement([3,2,1]));
console.log(findPeakElement([1]));
console.log(findPeakElement([-2147483648]));
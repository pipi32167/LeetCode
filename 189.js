/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
  
  while (k-- > 0) {
    var tmp = nums[nums.length-1]
    for(var i = nums.length-2; i >= 0; i--) {
      nums[i+1] = nums[i]
    } 
    nums[0] = tmp
  }
  return nums
};

// console.log(rotate([1,2,3,4,5,6,7], 3), [5,6,7,1,2,3,4]);

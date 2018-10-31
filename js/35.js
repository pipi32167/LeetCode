

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    
  for(var i = 0; i < nums.length; i++) {
    if (target <= nums[i]) {
      return i;
    }
  }
  return i;
};
console.log(searchInsert([], 0));
console.log(searchInsert([1], 0));
console.log(searchInsert([1], 1));
console.log(searchInsert([1], 2));
console.log(searchInsert([1,3,5,6], 5));
console.log(searchInsert([1,3,5,6], 2));
console.log(searchInsert([1,3,5,6], 7));
console.log(searchInsert([1,3,5,6], 0));


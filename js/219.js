/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
  for(var i = 0; i < nums.length; i ++) {
    for(var j = i+1; j < nums.length; j ++) {
      if (nums[i] === nums[j] && Math.abs(i - j) <= k) {
        return true
      }
    }
  }
  return false  
};
console.log(containsNearbyDuplicate([1,2,3,1], 3));
console.log(containsNearbyDuplicate([1,0,1,1], 1));
console.log(containsNearbyDuplicate([1,2,3,1,2,3], 2));
console.log(containsNearbyDuplicate([99, 99], 2));
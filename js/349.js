var contains = function (nums, num) {
  for(var i = 0; i < nums.length; i++) {
    if (nums[i] === num) {
      return true
    }
  }
  return false;
}

/**
 * O(n^3)
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
  var result = [];
  for(var i = 0; i < nums1.length; i++)  {
    for(var j = 0; j < nums2.length; j++) {
      if (nums1[i] === nums2[j] && !contains(result, nums1[i])) {
        result.push(nums1[i])
      }
    }
  }
  return result;
};

console.log(intersection([1,2,2,1], [2,2]));
console.log(intersection([4,9,5], [9,4,9,8,4]));

var check = function (nums) {
  for(var i = 0; i < nums.length - 1; i++) {
    if (i % 2 === 0) {
      if (nums[i] >= nums[i+1]) {
        return false
      }
    } else {
      if (nums[i] <= nums[i+1]) {
        return false
      }
    }
  }
  return true
}

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var wiggleSort = function(nums) {
    
  nums = nums.sort(function (a, b) {
    return a-b;
  })
  
  var m = Math.ceil(nums.length / 2)
  var nums1 = nums.slice(0, m).reverse()
  var nums2 = nums.slice(m).reverse()
  // console.log({nums, nums1, nums2});
  
  for(var i = 0; i < nums.length - 2; i+=2) {
    var j = Math.floor(i / 2)
    nums[i] = nums1[j]
    nums[i+1] = nums2[j]
  }
  var j = Math.floor(i / 2)
  nums[i] = nums1[j]
  if (j < nums2.length) {
    nums[i+1] = nums2[j]
  }
  // console.log(nums);
  if (!check(nums)) {
    console.log('invalid result: ', nums)
    return
  }
  return nums
};

console.log(wiggleSort([4,5,5,6]));
console.log(wiggleSort([1, 5, 1, 1, 6, 4]));
console.log(wiggleSort([1, 3, 2, 2, 3, 1]));
console.log(wiggleSort([1, 3, 2, 2, 3, 1, 4]));
console.log(wiggleSort([10,1,7,2,10,5,8,4,9,4,10,8,8,1,5,6,8,9,2,1]));
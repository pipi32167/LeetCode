
var swap = function (nums, i, j) {
  var tmp = nums[i];
  nums[i] = nums[j];
  nums[j] = tmp;
}


var quickSort3 = function (nums, l, u) {
  if (l >= u) {
    return nums
  }

  var t = nums[l], i = l, j = u+1
  while(true) {
    do { i++ } while(i <= u && nums[i] < t)
    do { j-- } while(nums[j] > t)
    if (i > j) {
      break
    }
    swap(nums, i, j)
  }
  swap(nums, l, j)
  quickSort3(nums, l, j - 1)
  quickSort3(nums, j + 1, u)
  return nums
}

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    
  var nums = nums1.concat(nums2)
  quickSort3(nums, 0, nums.length - 1)
  if (nums.length % 2 === 0) {
    var m = nums.length / 2 - 1
    return (nums[m] + nums[m+1]) / 2
  } else {
    return nums[Math.floor(nums.length / 2)]
  }
};

var nums1 = [1, 3], nums2 = [2]
console.log(findMedianSortedArrays(nums1, nums2), 2);
var nums1 = [1, 2], nums2 = [3, 4]
console.log(findMedianSortedArrays(nums1, nums2), 2.5);


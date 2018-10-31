
var quickSort3 = function (nums, l, u) {
  if (l >= u) {
    return
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
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  for(var i = 0; i < nums.length; i ++) {
    for(var j = i+1; j < nums.length; j ++) {
      if (nums[i] === nums[j]) {
        return true
      }
    }
  }
  return false
};

console.log(containsDuplicate([1,2,3,1]));
console.log(containsDuplicate([1,2,3,4]));
console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2]));

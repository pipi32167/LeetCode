var isInRange = function (nums, l, u) {
  var count1 = 0
  for(var i = 0; i < nums.length; i++) {
    if (nums[i] >= l && nums[i] <= u) {
      count1 ++
    }
  }
  var count2 = u - l + 1
  return count1 > count2
}

var go = function (nums, l, u) {
  // console.log({ l, u });
  if (l === u) {
    return l
  }
  
  var m = Math.floor((l + u) / 2)
  
  if (isInRange(nums, l, m)) {
    return go(nums, l, m)
  } else {
    return go(nums, m+1, u)
  }
}

/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
  var n = nums.length - 1
  return go(nums, 1, n)
};

console.log(findDuplicate([1,3,4,2,2]), 2);
console.log(findDuplicate([3,1,3,4,2]), 3);
console.log(findDuplicate([1,1,1,1,1]), 1);
console.log(findDuplicate([2,2,2,2,2]), 2);


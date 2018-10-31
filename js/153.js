
var go = function (nums, l, u) {
  
  var m = Math.floor((l + u) / 2)
  // console.log({ l, m, u });
  if (nums[m] > nums[m + 1]) {
    return m + 1
  } else if (l + 1 === u) {
    return 0
  } else if (nums[l] > nums[m]) {
    return go(nums, l, m)
  } else {
    return go(nums, m, u)
  }
}

var searchSpinIdx = function (nums) {
  if (nums.length <= 1) {
    return 0
  }
  return go(nums, 0, nums.length - 1)
}
var searchSpinIdx = function (nums) {
  for(var i = 1; i < nums.length; i++) {
    if (nums[i - 1] > nums[i]) {
      return i
    }
  }
  return 0
}

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    
  var idx = searchSpinIdx(nums)
  return nums[idx]
};

console.log(findMin( [1]), 1);
console.log(findMin( [1,2]), 1);
console.log(findMin( [1,2,3]), 1);
console.log(findMin( [3,4,5,6,7,8,9,10,1,2]), 1);
console.log(findMin( [3,4,5,1,2]), 1);
console.log(findMin( [4,5,6,7,0,1,2]), 0);
console.log(findMin( [1,3,5]), 1);
console.log(findMin( [2,2,2,0,1]), 0);
console.log(findMin( [10,1,10,10,10]), 1);
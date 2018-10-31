
var swap = function (nums, i, j) {
  var tmp = nums[i];
  nums[i] = nums[j];
  nums[j] = tmp;
}

var reverse = function (nums, l, u) {
  while(l < u) {
    swap(nums, l++, u--)
  }
}

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
  if (nums.length <= 1) {
    return 
  }
  
  for(var i = nums.length - 2; i >= 0; i--) {
    if (nums[i+1] > nums[i]) {
      break
    }
  }
  if (i >= 0) {
    var min = Math.pow(2, 31), minIdx = -1
    for(var j = nums.length - 1; j > i; j--) {
      if (min > nums[j] && nums[j] > nums[i]) {
        min = nums[j]
        minIdx = j
      }
    }
    // console.log({ i, j, min, minIdx });
    if (minIdx !== -1) {
      swap(nums, i, minIdx)
      reverse(nums, i+1, nums.length - 1)
    }
  } else {
    reverse(nums, 0, nums.length - 1)
  }

  return nums
};

console.log(nextPermutation([1,2,3]), [1,3,2]);
console.log(nextPermutation([3,2,1]), [1,2,3]);
console.log(nextPermutation([1,1,5]), [1,5,1]);
console.log(nextPermutation([1,3,2]), [2,1,3]);
console.log(nextPermutation([1,5,1]), [5,1,1]);
console.log(nextPermutation([5,1,1]), [1,1,5]);
console.log(nextPermutation([2,2,7,5,4,3,2,2,1]), [5,1,1]);
console.log(nextPermutation([6,7,5,3,5,6,2,9,1,2,7,0,9]), [5,1,1]);
// var arr = [1,2,3];

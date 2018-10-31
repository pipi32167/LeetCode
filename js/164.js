
var swap = function (nums, i, j) {
  var tmp = nums[i];
  nums[i] = nums[j];
  nums[j] = tmp;
}

var doQuickSort = function (nums, l, u) {
  if (l >= u) {
    return;
  }

  // console.log('doQuickSort', nums, l, u);
  var m = l;
  for(var i = l + 1; i <= u; i++) {
    if (nums[i] < nums[l]) {
      ++m;
      if (m !== i) {
        // console.log('swap1 before', nums);
        swap(nums, m, i)
        // console.log('swap1 after ', nums, m, i);
      }
    }
  }
  if (l !== m) {
    // console.log('swap2 before', nums);
    swap(nums, l, m);
    // console.log('swap2 after ', nums, l, m); 
  }
  
  doQuickSort(nums, l, m-1)
  doQuickSort(nums, m+1, u)
}

var quickSort = function (nums) {
  
  doQuickSort(nums, 0, nums.length - 1);
  return nums;
}

/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumGap = function(nums) {
  nums = quickSort(nums)
  var max = 0
  for(var i = 0; i < nums.length - 1; i++) {
    var gap = nums[i + 1] - nums[i]
    if (max < gap) {
      max = gap
    }
  }
  return max
};

console.log(maximumGap([3,6,9,1]));
console.log(maximumGap([10]));

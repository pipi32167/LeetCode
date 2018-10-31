
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
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
  nums = quickSort(nums)  
  return nums[nums.length - k]
};

console.log(findKthLargest([3,2,1,5,6,4], 2));
console.log(findKthLargest( [3,2,3,1,2,4,5,5,6], 4));

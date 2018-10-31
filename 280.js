var swap = function (nums, i, j) {
  var tmp = nums[i];
  nums[i] = nums[j];
  nums[j] = tmp;
}


var wiggleSort = function (nums) {
  
  if(nums.length <= 1) {
    return nums;
  }

  for(var i = 1; i < nums.length;i ++) {
    
    if (i % 2 === 0 && nums[i] > nums[i - 1] || i % 2 === 1 && nums[i] < nums[i - 1]) {
      swap(nums, i, i - 1)
    }
  }

  return nums
}

console.log(wiggleSort([4,5,5,6]));
console.log(wiggleSort([1, 5, 1, 1, 6, 4]));

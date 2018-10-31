
var swap = function (arr, i, j) {
  var tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
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
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  quickSort3(nums, 0, nums.length - 1)  
  for(var i = 0; i < nums.length-1; i+=2) {
    if (nums[i] !== nums[i+1]) {
      return nums[i]
    }
  }
  return nums[nums.length-1]
};

console.log(singleNumber([2,2,1]), 1);
console.log(singleNumber([4,1,2,1,2]), 4);


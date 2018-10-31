
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
  var result = []
  for(var i = 0; i < nums.length-1; ) {
    if (nums[i] !== nums[i+1]) {
      result.push(nums[i])
      i++
    } else {
      i+=2
    }
  }
  if (i < nums.length) {
    result.push(nums[nums.length-1])
  }
  return result
};

console.log(singleNumber([1,2,1,3,2,5]), [3,5]);
console.log(singleNumber([1,2,2,3,3,5]), [1,5]);

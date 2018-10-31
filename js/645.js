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
 * @return {number[]}
 */
var findErrorNums = function(nums) {
    
  quickSort3(nums, 0, nums.length - 1)

  nums.push(nums.length + 1)
  nums.unshift(0)
  // console.log(nums);
  var missingNum, repeatNum
  for(var i = 1; i < nums.length; i++) {
    if (nums[i-1] === nums[i]) {
      repeatNum = nums[i]
    } 
    
    if (nums[i-1] + 1 < nums[i]) {
      // console.log('missing', nums[i-1], nums[i]);
      missingNum = nums[i-1] + 1
    }
  }
  return [repeatNum, missingNum]
};

console.log(findErrorNums([1,2,2,4]), [2,3]);
console.log(findErrorNums([1,2,2,3]), [2,4]);
console.log(findErrorNums([1,1]), [1,2]);
console.log(findErrorNums([2,2]), [2,1]);
console.log(findErrorNums([3,2,2]), [2,1]);
console.log(findErrorNums([3,2,3,4,6,5]), [3,1]);
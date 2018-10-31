var swap = function (nums, i, j) {
  var tmp = nums[i]
  nums[i] = nums[j]
  nums[j] = tmp
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

var sort = function (nums, l, u) {
  quickSort3(nums, l, u)
}

/**
 * @param {number} n
 * @return {number}
 */
var nextGreaterElement = function(n) {
  
  var nums = [], num = n
  while(num) {
    nums.unshift(num % 10)
    num = Math.floor(num / 10)
  }
  // console.log({ nums });
  for(var i = nums.length - 2; i >= 0; i --) {
    if (nums[i] < nums[i+1]) {
      break
    }
  }
  //cannot find next greater element
  if (i < 0) {
    return -1
  }
  // console.log({ i, v: nums[i] });
  for(var j = nums.length - 1; j > i; j--) {
    if (nums[j] > nums[i]) {
      // console.log({ i, j, vi: nums[i], vj: nums[j] });
      swap(nums, i, j)
      break
    }
  }
  sort(nums, i+1, nums.length - 1)
  var result = Number(nums.join(''))
  return result > Math.pow(2, 31) ? -1 : result
};

console.log(nextGreaterElement(12), 21);
console.log(nextGreaterElement(21), -1);
console.log(nextGreaterElement(12345), 12354);
console.log(nextGreaterElement(54321), -1);
console.log(nextGreaterElement(12443322), 13222344);
console.log(nextGreaterElement(1999999999), -1);
console.log(nextGreaterElement(2147483674), -1);




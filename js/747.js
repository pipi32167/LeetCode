
/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function (nums) {

  if (nums.length === 1) {
    return 0
  }
  nums = nums.map((v, i) => [v, i])
  nums.sort((a, b) => b[0]-a[0])
  const max = nums[0]
  const max2 = nums[1]
  return max[0] >= max2[0] * 2 ? max[1] : -1
};

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
    do { i++ } while(i <= u && nums[i][0] < t[0])
    do { j-- } while(nums[j][0] > t[0])
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
var dominantIndex = function (nums) {

  if (nums.length === 1) {
    return 0
  }
  nums = nums.map((v, i) => [v, i])
  quickSort3(nums, 0, nums.length-1)
  const max = nums[nums.length-1]
  const max2 = nums[nums.length-2]
  return max[0] >= max2[0] * 2 ? max[1] : -1
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function (nums) {

  if (nums.length === 1) {
    return 0
  }
  let max = -1, maxCount = 0, maxIdx
  for (let i = 0; i < nums.length; i++) {
    if (max < nums[i]) {
      max = nums[i]
      maxCount = 1
      maxIdx = i
    } else if(max === nums[i]) {
      maxCount++
    }
  }
  if (maxCount > 1) {
    return -1
  }

  let max2 = -1
  for (let i = 0; i < nums.length; i++) {
    if (max !== nums[i] && max2 < nums[i]) {
      max2 = nums[i]
    } 
  }
  return max >= max2 * 2 ? maxIdx : -1
};

const assert = require('assert');
assert.equal(dominantIndex([1]), 0)
assert.equal(dominantIndex([3, 6, 1, 0]), 1)
assert.equal(dominantIndex([1, 2, 3, 4]), -1)
assert.equal(dominantIndex([4, 3, 2, 1]), -1)
assert.equal(dominantIndex([4, 2, 2, 1]), 0)
assert.equal(dominantIndex([0, 0, 3, 2]), -1)
var assert = require('assert');

var swap = function (arr, i, j) {
  var tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
}

var quickSort3 = function (nums, l, u) {
  if (l >= u) {
    return nums
  }

  var t = nums[l],
    i = l,
    j = u + 1
  while (true) {
    do {
      i++
    } while (i <= u && nums[i] < t)
    do {
      j--
    } while (nums[j] > t)
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

var binarySearch = function (nums, num, l, u) {
  // console.log({ num, l, u });

  if (l > u) {
    // console.log({ num, l, u, idx: -1 });
    return -1
  }
  const m = (l + u) >> 1
  if (nums[m] < num && nums[m + 1] >= num) {
    // console.log({ num, l, u, idx: m });
    return m
  }
  if (nums[m] < num) {
    return binarySearch(nums, num, m + 1, u)
  } else {
    return binarySearch(nums, num, l, m - 1)
  }
}

assert.equal(binarySearch([2, 2, 3, 4, 1001], 4, 0, 4), 2)
assert.equal(binarySearch([2, 2, 3, 4, 1001], 3, 0, 4), 1)


/**
 * @param {number[]} nums
 * @return {number}
 */
var triangleNumber = function (nums) {
  quickSort3(nums, 0, nums.length - 1)
  nums.push(1001)
  let count = 0
  for (let i = 0; i < nums.length - 1; i++) {
    const a = nums[i];
    if (a === 0) {
      continue
    }
    for (let j = i + 1; j < nums.length - 1; j++) {
      const b = nums[j];
      // console.log({ i, j, a, b });
      if (b === 0) {
        continue
      }
      const k = binarySearch(nums, a + b, j + 1, nums.length - 1)
      // console.log({ i, j, k, a, b, count: k-j });
      if (k <= j) {
        continue
      }
      count += k - j
    }
  }
  return count
};

assert.equal(triangleNumber([2, 2, 3, 4]), 3)
assert.equal(triangleNumber(new Array(1000).fill(0).map((e, idx) => idx)), 41541251)
// assert.equal(triangleNumber(new Array(5000).fill(0).map((e, idx) => idx)), 5198963749)
assert.equal(triangleNumber(new Array(1000).fill(0)), 0)
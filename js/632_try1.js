var assert = require('assert');

var isValid = function (nums, range) {

  for (let i = 0; i < nums.length; i++) {
    let hit = false
    for (let j = 0; j < nums[i].length; j++) {
      if (range[0] <= nums[i][j] && nums[i][j] <= range[1]) {
        hit = true
        break
      }
    }
    if (!hit) {
      return false
    }
  }
  return true
}

var flatten = function (nums) {
  let result = []
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums[i].length; j++) {
      result.push(nums[i][j]);
    }
  }
  return result
  // return nums.reduce((s, e) => s.concat(e), [])
}

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

var binarySearchMin = function (nums, nums2, l, u, max) {
  // console.log({ l, u, max });
  if (l > u) {
    return -1
  }
  if (l === u) {
    return l
  }

  let m = Math.ceil((l + u) / 2)
  if (isValid(nums, [nums2[m], nums2[max]])) {
    return binarySearchMin(nums, nums2, m, u, max)
  } else {
    return binarySearchMin(nums, nums2, l, m - 1, max)
  }
}

var binarySearchMax = function (nums, nums2, l, u, min) {
  if (l > u) {
    return -1
  }
  if (l === u) {
    return l
  }

  let m = Math.floor((l + u) / 2)
  if (isValid(nums, [nums2[min], nums2[m]])) {
    return binarySearchMax(nums, nums2, l, m, min)
  } else {
    return binarySearchMax(nums, nums2, m + 1, u, min)
  }
}

/**
 * @param {number[][]} nums
 * @return {number[]}
 */
var smallestRange = function (nums) {
  if (nums.length === 1) {
    return [nums[0][0], nums[0][0]]
  }

  const nums2 = flatten(nums)
  quickSort3(nums2, 0, nums2.length - 1)

  // console.log(nums2);

  const cmp = (a, b) => {
    const res = (a[1] - a[0]) - (b[1] - b[0])
    if (res === 0) {
      return a[0] - b[0]
    }
    return res
  }

  let min = [nums2[0], nums2[nums2.length - 1]]

  for (let k = 0; k < nums2.length; k++) {
    let i = k
    let j = nums2.length - 1
    i = binarySearchMin(nums, nums2, i, j, j)
    j = binarySearchMax(nums, nums2, i, j, i)
    let res = [nums2[i], nums2[j]]
    if (cmp(min, res) > 0) {
      min = res
    }

    i = k
    j = nums2.length - 1
    j = binarySearchMax(nums, nums2, i, j, i)
    i = binarySearchMin(nums, nums2, i, j, j)
    res = [nums2[i], nums2[j]]
    if (cmp(min, res) > 0) {
      min = res
    }
  }

  // const res1 = (() => {

  //   let i = 0
  //   let j = nums2.length - 1
  //   // while (isValid(nums, [nums2[i + 1], nums2[j]])) {
  //   //   i++
  //   // }
  //   i = binarySearchMin(nums, nums2, i, j, j)
  //   // console.log({ i });

  //   // while (i < j - 1 && isValid(nums, [nums2[i], nums2[j - 1]])) {
  //   //   j--
  //   // }
  //   j = binarySearchMax(nums, nums2, i, j, i)
  //   return [nums2[i], nums2[j]]
  // })()

  // const res2 = (() => {

  //   let i = 0
  //   let j = nums2.length - 1
  //   j = binarySearchMax(nums, nums2, i, j, i)
  //   i = binarySearchMin(nums, nums2, i, j, j)
  //   return [nums2[i], nums2[j]]
  // })()

  return min
  // console.log({ j });
};

assert.deepEqual(smallestRange([
  [4, 10, 15, 24, 26],
  [0, 9, 12, 20],
  [5, 18, 22, 30]
]), [20, 24])

assert.deepEqual(smallestRange([
  [1]
]), [1, 1])
assert.deepEqual(smallestRange([
  [11, 38, 83, 84, 84, 85, 88, 89, 89, 92],
  [28, 61, 89],
  [52, 77, 79, 80, 81],
  [21, 25, 26, 26, 26, 27],
  [9, 83, 85, 90],
  [84, 85, 87],
  [26, 68, 70, 71],
  [36, 40, 41, 42, 45],
  [-34, 21],
  [-28, -28, -23, 1, 13, 21, 28, 37, 37, 38],
  [-74, 1, 2, 22, 33, 35, 43, 45],
  [54, 96, 98, 98, 99],
  [43, 54, 60, 65, 71, 75],
  [43, 46],
  [50, 50, 58, 67, 69],
  [7, 14, 15],
  [78, 80, 89, 89, 90],
  [35, 47, 63, 69, 77, 92, 94]
]), [15, 84])
assert.deepEqual(smallestRange([
  [1, 2, 3],
  [1, 2, 3],
  [1, 2, 3]
]), [1, 1]);
assert.deepEqual(smallestRange([
  [-2, 87, 89],
  [-24, 40, 72, 77, 87, 91, 92, 92, 92, 92, 93],
  [12, 16, 17, 17, 17, 18],
  [9, 19, 20, 21, 22],
  [26, 40, 50, 53, 54, 55],
  [8, 35, 37, 37, 37, 38, 38, 40],
  [-15, 37, 37, 39],
  [2, 31, 34, 35, 36, 36, 37, 38, 38, 38, 38, 39],
  [10, 28, 65, 72, 76, 79, 79, 80]
]), [-2, 40]);
assert.deepEqual(smallestRange(require('./632_input').sample1), [99999, 100000])
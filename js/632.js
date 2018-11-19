var isOk = function (nums, i, j) {

  for (let k = 0; k < nums.length; k++) {
    let hit = false
    for (let l = 0; l < nums[k].length; l++) {
      if (nums[k][l] >= i && nums[k][l] <= j) {
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

  return nums.reduce((s, e) => s.concat(e), [])
}

var uniq = function (nums) {
  return Array.from(new Set(nums))
}

var swap = function (arr, i, j) {
  var tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
}

var quickSort3 = function (nums, l, u, cmpFn = (a, b) => a - b) {
  if (l >= u) {
    return nums
  }

  var t = nums[l],
    i = l,
    j = u + 1
  while (true) {
    do {
      i++
    } while (i <= u && cmpFn(nums[i], t) < 0)
    do {
      j--
    } while (cmpFn(nums[j], t) > 0)
    if (i > j) {
      break
    }
    swap(nums, i, j)
  }
  swap(nums, l, j)
  quickSort3(nums, l, j - 1, cmpFn)
  quickSort3(nums, j + 1, u, cmpFn)
  return nums
}

var findNext = function (nums, idx) {

  for (let i = idx + 1; i < nums.length; i++) {
    if (nums[i] !== nums[idx]) {
      return i
    }
  }
  return -1
}

/**
 * @param {number[][]} nums
 * @return {number[]}
 */
var smallestRange = function (nums) {
  const nums2 = uniq(flatten(nums))
  quickSort3(nums2, 0, nums2.length - 1)
  let min = 10001,
    max = -10001
  for (let i = 0; i < nums2.length; i++) {
    if (min > nums2[i]) {
      min = nums2[i]
    }
    if (max < nums2[i]) {
      max = nums2[i]
    }
  }
  // console.log({ min, max, nums2 });
  let result = []
  let i = 0,
    j = 0
  while (i < nums2.length && j < nums2.length) {
    while (j >= 0 && j < nums2.length - 1 && !isOk(nums, nums2[i], nums2[j])) {
      j = findNext(nums2, j)
    }

    if (j < 0) {
      break
    }

    // console.log('j', { i, j, numi: nums2[i], numj: nums2[j] });
    let beforeI
    do {
      beforeI = i
      i = findNext(nums2, i)
    } while (i >= 0 && i <= j && isOk(nums, nums2[i], nums2[j]))

    i = beforeI
    // console.log('i', { i, j, numi: nums2[i], numj: nums2[j], isOk: isOk(nums, nums2[i], nums2[j]) });
    if (isOk(nums, nums2[i], nums2[j])) {
      result.push([nums2[i], nums2[j]])
    }
    i++
    j = i
  }
  // console.log(result);
  quickSort3(result, 0, result.length - 1, (a, b) => {
    const res = (a[1] - a[0]) - (b[1] - b[0])
    if (res === 0) {
      return a[0] - b[0]
    }
    return res
  })

  return result[0]
};

var assert = require('assert');
assert.deepEqual(smallestRange([
  [-38, 15, 17, 18],
  [-34, 46, 58, 59, 61],
  [-55, -31, -13, 64, 82, 82, 83, 84, 85],
  [-3, 63, 70, 90],
  [2, 6, 10, 28, 28, 32, 32, 32, 33],
  [-23, 82, 88, 88, 88, 89],
  [33, 60, 72, 74, 75],
  [-5, 44, 44, 57, 58, 58, 60],
  [-29, -22, -4, -4, 17, 18, 19, 19, 19, 20],
  [22, 57, 82, 89, 93, 94],
  [24, 38, 45],
  [-100, -56, 41, 49, 50, 53, 53, 54],
  [-76, -69, -66, -53, -27, -1, 9, 29, 31, 32, 32, 32, 34],
  [22, 47, 56],
  [-34, -28, 7, 44]
]), [18, 82])

assert.deepEqual(smallestRange([
  [1, 4, 7, 10, 13],
  [2, 5, 8, 11, 13],
  [3, 6, 9, 12]
]), [12, 13])
assert.deepEqual(smallestRange([
  [-5, -4, -3, -2, -1, 1],
  [1, 2, 3, 4, 5]
]), [1, 1])
assert.deepEqual(smallestRange([
  [1]
]), [1, 1])
assert.deepEqual(smallestRange([
  [4, 10, 15, 24, 26],
  [0, 9, 12, 20],
  [5, 18, 22, 30]
]), [20, 24])
assert.deepEqual(smallestRange(require('./632_input').sample1), [99999, 100000])
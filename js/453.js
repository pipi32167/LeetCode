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

/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function (nums) {

  let count = 0
  // let min = Math.min.apply(null, nums)
  // let max = Math.max.apply(null, nums)
  quickSort3(nums, 0, nums.length - 1)
  while (true) {
    min = nums[0]
    max = nums[nums.length - 1]
    if (min === max) {
      break
    }
    const diff = max - min
    for (let i = 0; i < nums.length - 1; i++) {
      nums[i] += diff;
    }
    count += diff
    const t = nums.pop()
    nums.unshift(t)
  }
  // console.log(nums);
  return count
};

var assert = require('assert');
var _ = require('lodash')
assert.equal(minMoves([1]), 0)
assert.equal(minMoves([1, 1, 1]), 0)
assert.equal(minMoves([1, 2, 3]), 3)
assert.equal(minMoves([1, 2, 3, 4]), 6)
assert.equal(minMoves([-1, 1]), 2)
assert.equal(minMoves([1, 2147483647]), 2147483646)
assert.equal(minMoves(_.range(0, 100)), 4950)
assert.equal(minMoves(_.range(0, 1000)), 499500)
assert.equal(minMoves(require('./453_input').sample1), 4969211)
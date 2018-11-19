// var findInsertIdx = function (nums, num) {

//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] >= num) {
//       return i
//     }
//   }
//   return nums.length
// }

var findInsertIdx = function (nums, num, l, u) {
  // assert.ok(!isNaN(l))
  // assert.ok(!isNaN(u))
  // console.log({ l, u, num });
  const m = Math.floor((l + u) / 2)
  if (nums[m] < num && nums[m + 1] >= num) {
    return m + 1
  }
  if (nums[m] >= num) {
    return findInsertIdx(nums, num, l, m - 1)
  } else {
    return findInsertIdx(nums, num, m + 1, u)
  }
}

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var countSmaller = function (nums) {

  const tmp = [-Math.pow(2, 31), Math.pow(2, 31)]
  const result = new Array(nums.length).fill(0)
  for (let i = nums.length - 1; i >= 0; i--) {
    // let idx = findInsertIdx(tmp, nums[i]);
    let idx = findInsertIdx(tmp, nums[i], 0, tmp.length - 1);
    // console.log(tmp, nums[i], idx);
    result[i] = idx - 1
    tmp.splice(idx, 0, nums[i])
  }
  return result
};

var findInsertIdxTest = function (nums, num) {
  nums.unshift(-Math.pow(2, 31))
  nums.push(Math.pow(2, 31))
  return findInsertIdx(nums, num, 0, nums.length - 1) - 1
}

var assert = require('assert');
var _ = require('lodash');
assert.equal(findInsertIdxTest([0, 1, 2], 0), 0)
assert.equal(findInsertIdxTest([0, 1, 2], 1), 1)
assert.equal(findInsertIdxTest([0, 1, 2], 2), 2)
assert.equal(findInsertIdxTest([0, 1, 2], 3), 3)
assert.equal(findInsertIdxTest([0, 1, 2, 3], 0), 0)
assert.equal(findInsertIdxTest([0, 1, 2, 3], 1), 1)
assert.equal(findInsertIdxTest([0, 1, 2, 3], 2), 2)
assert.equal(findInsertIdxTest([0, 1, 2, 3], 3), 3)
assert.equal(findInsertIdxTest([0, 1, 2, 3], 4), 4)
assert.equal(findInsertIdxTest([0, 1, 2, 3], 1.5), 2)
assert.equal(findInsertIdxTest([0, 1, 2, 3], -1), 0)
assert.equal(findInsertIdxTest([1], 6), 1)
assert.equal(findInsertIdxTest([1], 0), 0)
assert.equal(findInsertIdxTest([1, 2], 0), 0)
assert.equal(findInsertIdxTest([1, 2], 1), 0)
assert.equal(findInsertIdxTest([1, 2], 2), 1)
assert.equal(findInsertIdxTest([1, 2], 3), 2)


assert.deepEqual(countSmaller([5, 2, 6, 1]), [2, 1, 1, 0])
// var nums = _(0).range(100000).shuffle().value()
assert.ok(countSmaller(require('./315_input').sample1))

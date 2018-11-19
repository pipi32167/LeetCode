/**
 * @param {number[][]} nums
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function (nums, r, c) {
  const m = nums.length
  const n = nums[0].length
  if (r * c !== m * n) {
    return nums
  }
  let result = new Array(r).fill(0).map(e => new Array(c))
  let k = 0
  for (let i = 0; i < r; i++) {
    for (let j = 0; j < c; j++, k++) {
      const i2 = Math.floor(k / n)
      const j2 = k % n
      result[i][j] = nums[i2][j2]
    }
  }
  return result
};

var assert = require('assert');
var nums = [
    [1, 2],
    [3, 4]
  ],
  res = [
    [1, 2, 3, 4]
  ],
  r = 1,
  c = 4;
for (let i = 0; i < 1000000; i++) {
  assert.deepEqual(matrixReshape(nums, r, c), res)
}
var nums = [
    [1, 2],
    [3, 4]
  ],
  res = [
    [1, 2],
    [3, 4]
  ],
  r = 2,
  c = 4;
assert.deepEqual(matrixReshape(nums, r, c), res)
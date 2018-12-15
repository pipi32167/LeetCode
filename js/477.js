/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function (x, y) {
  var xorResult = x ^ y;
  var result = 0;
  for (let i = 0; i < 32; i++) {
    if (xorResult & (1 << i)) {
      result++;
    }
  }

  return result;
};


var hammingDistance = function (a, b) {
  let nHammingDist = a ^ b;
  nHammingDist = (nHammingDist & 0x55555555) + ((nHammingDist >> 1) & 0x55555555);
  nHammingDist = (nHammingDist & 0x33333333) + ((nHammingDist >> 2) & 0x33333333);
  nHammingDist = (nHammingDist & 0x0f0f0f0f) + ((nHammingDist >> 4) & 0x0f0f0f0f);
  nHammingDist = (nHammingDist & 0x00ff00ff) + ((nHammingDist >> 8) & 0x00ff00ff);
  nHammingDist = (nHammingDist & 0x0000ffff) + ((nHammingDist >> 16) & 0x0000ffff);
  return nHammingDist
}
/**
 * @param {number[]} nums
 * @return {number}
 */
var totalHammingDistance = function (nums) {

  let distance = 0
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      const dist = hammingDistance(nums[i], nums[j])
      // console.log({ i: nums[i], j: nums[j], dist });
      distance += dist
    }
  }
  return distance
};

var assert = require('assert');
assert.equal(totalHammingDistance([4, 14, 2]), 6)
assert.equal(totalHammingDistance(Array(10000).fill(0)), 0)
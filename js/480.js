var {
  MedianFinder
} = require('./util.heap')

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var medianSlidingWindow = function (nums, k) {

  let result = []
  let finder = new MedianFinder()
  for (let i = 0; i < k - 1; i++) {
    finder.insert(nums[i])
  }
  let i = k - 1
  do {
    finder.insert(nums[i])
    result.push(finder.getMedian())
    finder.remove(nums[i - k + 1])
    i++
  } while (i < nums.length)
  // console.log(result);
  return result
};

var assert = require('assert');
var _ = require('lodash');
assert.deepEqual(medianSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3), [1, -1, -1, 3, 5, 6])

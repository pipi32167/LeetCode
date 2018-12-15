/**
 * @param {number[]} candies
 * @return {number}
 */
var distributeCandies = function (candies) {
  return Math.min(new Set(candies).size, candies.length / 2)
};

const assert = require('assert');
assert.equal(distributeCandies([1,1,2,2,3,3]), 3)
assert.equal(distributeCandies([1,1,2,3]), 2)
assert.equal(distributeCandies([1,4,2,3]), 2)
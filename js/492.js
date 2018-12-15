/**
 * @param {number} area
 * @return {number[]}
 */
var constructRectangle = function (area) {

  const u = Math.floor(Math.pow(area, 0.5))
  const l = 1
  for (let i = u; i >= l; i--) {
    if (area % i === 0) {
      const j = area / i
      return i >= j ? [i, j] : [j, i]
    }
  }
};

var assert = require('assert');
assert.deepEqual(constructRectangle(4), [2, 2])
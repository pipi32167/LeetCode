// var assert = require('assert')

/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @return {boolean}
 */
var canMeasureWater = function(x, y, z) {
  // console.log({ x, y, z });
  // assert.ok(!isNaN(x) && !isNaN(y) && !isNaN(z))
  if (z === 0) {
    return true
  }

  if (z > x + y) {
    return false
  }

  if (z % x === 0 || z % y === 0) {
    return true
  }

  var min = Math.min(x, y)
  var max = Math.max(x, y)

  if (min === 0 || max % min === 0) {
    return false
  }

  return canMeasureWater(min, max % min, z % min)
};

console.log(canMeasureWater(0,2,1), false);
console.log(canMeasureWater(0,0,0), true);
console.log(canMeasureWater(3,5,4), true);
console.log(canMeasureWater(2,6,5), false);
console.log(canMeasureWater(1,2,3), true);
console.log(canMeasureWater(34,5,1), true);
console.log(canMeasureWater(34,5,2), true);
console.log(canMeasureWater(34,5,3), true);
console.log(canMeasureWater(34,5,4), true);
console.log(canMeasureWater(34,5,6), true);

console.log('////');

console.log(canMeasureWater(2,5,1), true);
console.log(canMeasureWater(2,5,2), true);
console.log(canMeasureWater(2,5,3), true);
console.log(canMeasureWater(2,5,4), true);
console.log(canMeasureWater(2,5,5), true);
console.log(canMeasureWater(2,5,6), true);
console.log(canMeasureWater(2,5,7), true);
console.log(canMeasureWater(2,5,8), false);

console.log('////');

console.log(canMeasureWater(3,10,1), true);
console.log(canMeasureWater(3,10,2), true);
console.log(canMeasureWater(3,10,3), true);
console.log(canMeasureWater(3,10,4), true);
console.log(canMeasureWater(3,10,5), true);
console.log(canMeasureWater(3,10,6), true);
console.log(canMeasureWater(3,10,7), true);
console.log(canMeasureWater(3,10,8), true);
console.log(canMeasureWater(3,10,9), true);
console.log(canMeasureWater(3,10,10), true);
console.log(canMeasureWater(3,10,11), true);
console.log(canMeasureWater(3,10,12), true);
console.log(canMeasureWater(3,10,13), true);
console.log(canMeasureWater(3,10,14), false);

console.log('////');

console.log(canMeasureWater(4,10,1), false);
console.log(canMeasureWater(4,10,2), true);
console.log(canMeasureWater(4,10,3), false);
console.log(canMeasureWater(4,10,4), true);
console.log(canMeasureWater(4,10,5), false);
console.log(canMeasureWater(4,10,6), true);
console.log(canMeasureWater(4,10,7), false);
console.log(canMeasureWater(4,10,8), true);
console.log(canMeasureWater(4,10,9), false);
console.log(canMeasureWater(4,10,10), true);
console.log(canMeasureWater(4,10,11), false);
console.log(canMeasureWater(4,10,12), true);
console.log(canMeasureWater(4,10,13), false);
console.log(canMeasureWater(4,10,14), true);
console.log(canMeasureWater(4,10,15), false);

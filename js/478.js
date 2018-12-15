
/**
 * @param {number} radius
 * @param {number} x_center
 * @param {number} y_center
 */
var Solution = function (radius, x_center, y_center) {

  this.x_center = x_center
  this.y_center = y_center
  this.radius = radius
};

/**
 * @return {number[]}
 */
Solution.prototype.randPoint = function () {

  const rand = Math.random()
  const radius = rand * this.radius
  const radians = rand * 2 * Math.PI
  const x = Math.cos(radians) * radius
  const y = Math.sin(radians) * radius
  return [this.x_center + x, this.y_center + y]
};

var assert = require('assert');

var s = new Solution(0.01, -73839.1, -3289891.3)

for (let i = 0; i < 400000; i++) {
  // console.log();
  s.randPoint()
}
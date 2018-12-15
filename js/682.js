/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function (ops) {

  const points = []

  for (let i = 0; i < ops.length; i++) {
    const op = ops[i];
    switch (op) {
      case 'C':
        points.pop()
        break;
      case 'D':
        const p = points.length > 0 ? points[points.length - 1] : 0
        points.push(p * 2)
        break;
      case '+':
        const p1 = points.length > 0 ? points[points.length - 1] : 0
        const p2 = points.length > 1 ? points[points.length - 2] : 0
        points.push(p1 + p2)
        break;

      default:
        points.push(Number(op))
        break;
    }
  }

  return points.reduce((s, e) => s + e, 0)
};

var assert = require('assert');
assert.equal(calPoints(["5", "2", "C", "D", "+"]), 30)
assert.equal(calPoints(["5", "-2", "4", "C", "D", "9", "+", "+"]), 27)
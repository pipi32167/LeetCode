/**
 * @param {number} n
 * @return {number}
 */
var minSteps = function (n) {

  if (n === 1) {
    return 0
  }

  var g = new Array(n + 1).fill(0)
  var u = new Array(n + 1).fill(0)
  for (let i = 1; i <= n; i++) {
    g[i] = i
    u[i] = 1
    for (let j = Math.floor(i / 2); j >= 1; j--) {
      if (i % j === 0) {
        const steps = g[j] + i / j
        if (g[i] > steps) {
          g[i] = steps
          u[i] = j
        }
      }
    }
  }

  // console.log({
  //   g,
  //   u
  // });
  return g[n]
};

var assert = require('assert')
assert.equal(minSteps(1), 0)
assert.equal(minSteps(2), 2)
assert.equal(minSteps(3), 3)
assert.equal(minSteps(4), 4)
assert.equal(minSteps(5), 5)
assert.equal(minSteps(6), 5)
assert.equal(minSteps(7), 7)
assert.equal(minSteps(8), 6)
assert.equal(minSteps(9), 6)
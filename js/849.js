/**
 * @param {number[]} seats
 * @return {number}
 */
var maxDistToClosest = function (seats) {

  const s = []
  for (let i = 0; i < seats.length; i++) {
    if (seats[i]) {
      s.push(i)
    }
  }

  s.unshift(-s[0])
  s.push(2 * (seats.length - 1) - s[s.length - 1])

  let max = 0
  for (let i = 1; i < s.length; i++) {
    const dist = parseInt((s[i] - s[i - 1]) / 2)
    if (max < dist) {
      max = dist
    }
  }

  return max
};

var assert = require('assert');
assert.equal(maxDistToClosest([1, 0, 0, 0, 1, 0, 1]), 2)
assert.equal(maxDistToClosest([1, 0, 0, 0]), 3)
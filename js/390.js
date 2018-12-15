// https://blog.csdn.net/afei__/article/details/83689502

/**
 * @param {number} n
 * @return {number}
 */
var lastRemaining = function (n) {
  return n === 1 ? 1 : 2 * (parseInt(n / 2) + 1 - lastRemaining(parseInt(n / 2)))
};


var assert = require('assert');
assert.equal(lastRemaining(9), 6)
assert.equal(lastRemaining(100), 54)
assert.equal(lastRemaining(101), 54)
assert.equal(lastRemaining(245872), 120182)
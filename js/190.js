
/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function (n) {

  n = n.toString(2).split('')
  while (n.length < 32) {
    n.unshift('0')
  }
  // console.log(n.join(''));
  n = n.reverse().join('')
  // console.log(n);
  return Number('0b' + n)
};

var assert = require('assert');
assert.equal(reverseBits(43261596), 964176192)
assert.equal(reverseBits(1), Math.pow(2, 31))
assert.equal(reverseBits(Math.pow(2, 31)), 1)
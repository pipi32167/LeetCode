/**
 * @param {number} num
 * @return {string}
 */
var toHex = function (num) {

  if (num < 0) {
    num = 0x100000000 + num
  }

  const HEX = '0123456789abcdef'
  const result = []
  do {
    result.unshift(HEX[num % 16])
    num = Math.floor(num / 16)
  } while (num > 0)
  return result.join('')
};

var assert = require('assert');
assert.equal(toHex(26), '1a');
assert.equal(toHex(-1), 'ffffffff');
assert.equal(toHex(0), '0');
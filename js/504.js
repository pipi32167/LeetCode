/**
 * @param {number} num
 * @return {string}
 */
var convertToBase7 = function (num) {
  const result = []
  const oldNum = num
  num = Math.abs(num)
  const flag = num === oldNum ? '' : '-'
  do {
    result.unshift(num % 7)
    num = Math.floor(num / 7)
  } while (num > 0)
  // console.log(result);

  return flag + result.join('')
};

var assert = require('assert');
assert.equal(convertToBase7(100), '202')
assert.equal(convertToBase7(-7), '-10')
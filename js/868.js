/**
 * @param {number} N
 * @return {number}
 */
var binaryGap = function (N) {

  const binaryStr = Number(N).toString(2)
  let beforeIdx = -1
  let max = 0
  for (let i = 0; i < binaryStr.length; i++) {
    if (binaryStr[i] === '1') {
      if (beforeIdx === -1) {
        beforeIdx = i
      } else {
        max = Math.max(max, i - beforeIdx)
      }
      beforeIdx = i
    }
  }
  return max
};

var assert = require('assert');
assert.equal(binaryGap(22), 2)
assert.equal(binaryGap(5), 2)
assert.equal(binaryGap(6), 1)
assert.equal(binaryGap(8), 0)
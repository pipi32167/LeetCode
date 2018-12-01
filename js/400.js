/**
 * @param {number} n
 * @return {number}
 */
var findNthDigit = function (n) {

  let i = 0,
    num = 0,
    num2 = 0
  while (n > num + 9 * Math.pow(10, i) * (i + 1)) {
    num += 9 * Math.pow(10, i) * (i + 1)
    num2 += 9 * Math.pow(10, i)
    i++
    // console.log({ num });
  } 
  // console.log({ n, num, num2 });
  const diff = (n - num)
  num2 += Math.ceil(diff / (i + 1))
  // console.log({ n, num, num2, diff });
  return Number(num2.toString()[(diff - 1) % (i + 1)])
};

var assert = require('assert');
assert.equal(findNthDigit(1000000000000), 1)
assert.equal(findNthDigit(1000), 3)
assert.equal(findNthDigit(10), 1)
assert.equal(findNthDigit(3), 3)
assert.equal(findNthDigit(11), 0)
assert.equal(findNthDigit(12), 1)
assert.equal(findNthDigit(13), 1)
assert.equal(findNthDigit(14), 1)
assert.equal(findNthDigit(15), 2)
assert.equal(findNthDigit(100), 5)
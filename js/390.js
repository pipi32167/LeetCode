/**
 * @param {number} n
 * @return {number}
 */
var lastRemaining = function (n) {

  let nums = Array(n).fill(0).map((_, idx) => idx + 1)
  let order = 1
  while (nums.length > 1) {

    if (order > 0) {

      for (let i = 0; i < nums.length; i++) {
        if (i % 2 === 0) {
          nums[i] = null
        }
      }
    } else {

      for (let i = 0; i < nums.length; i++) {
        if ((nums.length - 1 - i) % 2 === 0) {
          nums[i] = null
        }
      }
    }

    nums = nums.filter(e => !!e)
    console.log(nums);
    order = -order
  }
  return nums[0]
};

// /**
//  * @param {number} n
//  * @return {number}
//  */
// var lastRemaining = function (n) {

//   let res = 0
//   while(n > 0) {
//     n = Math.floor(n / 2)
//     res += n
//   }
//   return res
// };

var assert = require('assert');
// assert.equal(lastRemaining(1), 1)
assert.equal(lastRemaining(2), 2)
assert.equal(lastRemaining(3), 2)
assert.equal(lastRemaining(4), 2)
assert.equal(lastRemaining(5), 2)
assert.equal(lastRemaining(6), 4)
// assert.equal(lastRemaining(7), 4)
// assert.equal(lastRemaining(8), 6)
// assert.equal(lastRemaining(9), 6)
// assert.equal(lastRemaining(10), 8)
// assert.equal(lastRemaining(11), 8)
// assert.equal(lastRemaining(12), 6)
// assert.equal(lastRemaining(13), 6)
// assert.equal(lastRemaining(14), 8)
// assert.equal(lastRemaining(100), 54)
// assert.equal(lastRemaining(101), 54)
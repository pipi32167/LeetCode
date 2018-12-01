
var isOk = function (results) {
  for (let i = 0; i < results.length; i++) {
    if (results[i][1] - results[i][0] < 2) {
      return false
    };
  }
  return true
}


/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isPossible = function (nums) {

  let results = [
    [nums[0], nums[0]]
  ]
  for (let i = 1; i < nums.length; i++) {
    let hit = false
    for (let j = results.length - 1; j >= 0; j--) {
      const e = results[j];
      if (e[1] + 1 === nums[i]) {
        e[1] = nums[i]
        hit = true
        break
      }
    }
    if (!hit) {
      results.push([nums[i], nums[i]])
    }
  }
  // console.log(results);
  return isOk(results)
};

var assert = require('assert');

assert.ok(isPossible([4, 5, 6, 7, 7, 8, 8, 9, 10, 11]))
assert.ok(!isPossible([1, 2, 3, 4, 4, 5]))
assert.ok(isPossible([1, 2, 3, 3, 4, 4, 5, 5]))
assert.ok(isPossible([1, 2, 3, 3, 4, 4, 5, 5, 6, 7]))
assert.ok(isPossible([1, 2, 3, 3, 4, 5]))
assert.ok(isPossible([1, 2, 3, 3, 4, 5, 5, 6, 7]))
assert.ok(isPossible(Array(33333).fill(1).concat(Array(33333).fill(2)).concat(Array(33333).fill(3))))
/**
 * @param {number[]} nums
 */
var Solution = function (nums) {

  this._nums = nums
};

/** 
 * @param {number} target
 * @return {number}
 */
Solution.prototype.pick = function (target) {
  let count = 0
  let lastIdx
  for (let i = 0; i < this._nums.length; i++) {
    if (this._nums[i] === target) {
      count++
      const rand = Math.floor(Math.random() * count)
      if (rand === 0) {
        lastIdx = i
      }
    }
  }

  return lastIdx
};

var o = new Solution([1,2,3,3,3])

var assert = require('assert');

for (let i = 0; i < 100; i++) {
  assert.ok([2,3,4].indexOf(o.pick(3)) >= 0)
}

for (let i = 0; i < 100; i++) {
  assert.equal(o.pick(1), 0)
}

for (let i = 0; i < 100; i++) {
  assert.equal(o.pick(2), 1)
}
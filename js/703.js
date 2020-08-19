/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function (k, nums) {
  this._nums = nums.sort((a, b) => b - a)
  this._k = k - 1
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function (val) {

  let pos = this._nums.length
  for (let i = 0; i < this._nums.length; i++) {
    // console.log(val, this._nums[i], val >= this._nums[i]);
    if (val >= this._nums[i]) {
      pos = i
      break
    }
  }
  this._nums.splice(pos, 0, val)
  // console.log(this._nums, val, pos);
  return this._nums[this._k]
};

var assert = require('assert');

var o = new KthLargest(1, [])
var input = [-3, -2, -4, 0, 4]
var output = [-3, -2, -2, 0, 4]
for (let i = 0; i < input.length; i++) {
  assert.equal(o.add(input[i]), output[i])
}

var o = new KthLargest(1, [])
for (let i = 0; i < 5000; i++) {
  assert.equal(o.add(i), i)
}
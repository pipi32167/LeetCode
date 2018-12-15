/**
 * @param {number} N
 */
var ExamRoom = function (N) {
  this.N = N
  this.seats = new Set
};

/**
 * @return {number}
 */
ExamRoom.prototype.seat = function () {

  if (this.seats.size === 0) {
    this.seats.add(0)
    return 0
  }

  const nums = Array.from(this.seats).sort((a, b) => a - b)
  if (nums[0] !== 0) {
    nums.unshift(-nums[0])
  }
  if (nums[nums.length - 1] !== this.N - 1) {
    nums.push((this.N - 1) * 2 - nums[nums.length - 1])
  }
  // console.log(nums);
  let max = 0,
    maxRes
  for (let i = 1; i < nums.length; i++) {
    const res = parseInt((nums[i - 1] + nums[i]) / 2 - nums[i - 1])
    if (max < res) {
      max = res
      maxRes = nums[i - 1] + res
    }
  }
  this.seats.add(maxRes)
  return maxRes
};

/** 
 * @param {number} p
 * @return {void}
 */
ExamRoom.prototype.leave = function (p) {
  this.seats.delete(p)
};


var assert = require('assert');
var room = new ExamRoom(10)
assert.equal(room.seat(), 0)
assert.equal(room.seat(), 9)
assert.equal(room.seat(), 4)
assert.equal(room.seat(), 2)
room.leave(4)
assert.equal(room.seat(), 5)


var room = new ExamRoom(1000000000)
for (let i = 0; i < 4000; i++) {
  room.seat()
}
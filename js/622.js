/**
 * Initialize your data structure here. Set the size of the queue to be k.
 * @param {number} k
 */
var MyCircularQueue = function (k) {

  this._buff = Array(k).fill(0)
  this._capacity = k
  this._begin = 0
  this._end = 0
};

/**
 * Insert an element into the circular queue. Return true if the operation is successful. 
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function (value) {

  if (this.isFull()) {
    return false
  }
  this._buff[this._end++ % this._capacity] = value
  return true
};

/**
 * Delete an element from the circular queue. Return true if the operation is successful.
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function () {

  if (this.isEmpty()) {
    return false
  }
  this._begin++
  return true
};

/**
 * Get the front item from the queue.
 * @return {number}
 */
MyCircularQueue.prototype.Front = function () {
  if (!this.isEmpty()) {
    return this._buff[this._begin % this._capacity]
  }
  return -1
};

/**
 * Get the last item from the queue.
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function () {
  if (!this.isEmpty()) {
    return this._buff[(this._end - 1) % this._capacity]
  }
  return -1
};

/**
 * Checks whether the circular queue is empty or not.
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function () {
  return this._end <= this._begin
};

/**
 * Checks whether the circular queue is full or not.
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function () {
  return this._end - this._begin >= this._capacity
};

var assert = require('assert');
var circularQueue = new MyCircularQueue(3); // 设置长度为3
assert.equal(circularQueue.enQueue(1), true)
assert.equal(circularQueue.enQueue(2), true)
assert.equal(circularQueue.enQueue(3), true)
assert.equal(circularQueue.enQueue(4), false)
assert.equal(circularQueue.Rear(), 3)
assert.equal(circularQueue.isFull(), true)
assert.equal(circularQueue.deQueue(), true)
assert.equal(circularQueue.enQueue(4), true)
assert.equal(circularQueue.Rear(), 4)
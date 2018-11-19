/**
 * Initialize your data structure here.
 */
var RandomizedCollection = function () {

  this.__list = []
};

/**
 * Inserts a value to the collection. Returns true if the collection did not already contain the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedCollection.prototype.insert = function (val) {
  const idx = this.__list.indexOf(val)
  this.__list.push(val)
  return idx < 0
};

/**
 * Removes a value from the collection. Returns true if the collection contained the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedCollection.prototype.remove = function (val) {

  const idx = this.__list.indexOf(val)
  if (idx >= 0) {
    this.__list.splice(idx, 1)
    return true
  }
  return false
};

/**
 * Get a random element from the collection.
 * @return {number}
 */
RandomizedCollection.prototype.getRandom = function () {

  var idx = Math.floor(Math.random() * this.__list.length)
  return this.__list[idx]
};

const assert = require('assert');
const o = new RandomizedCollection()
assert.ok(o.insert(1))
assert.ok(!o.insert(1))
assert.ok(o.insert(2))
for (let i = 0; i < 10; i++) {
  assert.ok([1, 2].indexOf(o.getRandom()) >= 0)
}
assert.ok(o.remove(1))
for (let i = 0; i < 10; i++) {
  assert.ok([1, 2].indexOf(o.getRandom()) >= 0)
}
assert.ok(o.remove(1))
for (let i = 0; i < 10; i++) {
  assert.equal(o.getRandom(), 2)
}
assert.ok(!o.remove(1))
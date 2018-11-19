var assert = require('assert');
var NestedInteger = require('./util.NestedInteger');
var {
  deserialize
} = NestedInteger

/**
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 * function NestedInteger() {
 *
 *     Return true if this NestedInteger holds a single integer, rather than a nested list.
 *     @return {boolean}
 *     this.isInteger = function() {
 *         ...
 *     };
 *
 *     Return the single integer that this NestedInteger holds, if it holds a single integer
 *     Return null if this NestedInteger holds a nested list
 *     @return {integer}
 *     this.getInteger = function() {
 *         ...
 *     };
 *
 *     Return the nested list that this NestedInteger holds, if it holds a nested list
 *     Return null if this NestedInteger holds a single integer
 *     @return {NestedInteger[]}
 *     this.getList = function() {
 *         ...
 *     };
 * };
 */
/**
 * @constructor
 * @param {NestedInteger[]} nestedList
 */
var NestedIterator = function (nestedList) {
  this.__list = []
  let input = nestedList
  while (input.length > 0) {
    const item = input.shift()
    // console.log(item, item.isInteger());
    if (item.isInteger()) {
      this.__list.push(item.getInteger())
    } else {
      input = item.getList().concat(input)
    }
  }
  this.__idx = 0
};

/**
 * @this NestedIterator
 * @returns {boolean}
 */
NestedIterator.prototype.hasNext = function () {
  return this.__idx < this.__list.length
};

/**
 * @this NestedIterator
 * @returns {integer}
 */
NestedIterator.prototype.next = function () {
  return this.__list[this.__idx++]
};

var int = deserialize('[[1,1],2,[1,1]]')
var iter = new NestedIterator([int])
var items = [1, 1, 2, 1, 1]
assert.deepEqual(iter.__list, items)
for (let i = 0; i < items.length; i++) {
  assert.ok(iter.hasNext())
  assert.equal(iter.next(), items[i])
}
assert.ok(!iter.hasNext())

var int = deserialize('[1,2,[3,4],5,[6,[7,[8,[9,[]]]]')
var iter = new NestedIterator([int])
var items = [1, 2, 3, 4, 5, 6, 7, 8, 9]
assert.deepEqual(iter.__list, items)
for (let i = 0; i < items.length; i++) {
  assert.ok(iter.hasNext())
  assert.equal(iter.next(), items[i])
}
assert.ok(!iter.hasNext())
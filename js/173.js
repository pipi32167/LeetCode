var iterate = function (root, result) {
  
  if (!root) {
    return
  }

  iterate(root.left, result)
  result.push(root.val)
  iterate(root.right, result)
}

/**
 * Definition for binary tree
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @constructor
 * @param {TreeNode} root - root of the binary search tree
 */
var BSTIterator = function(root) {
  this.nums = []
  this.idx = 0

  iterate(root, this.nums)
};


/**
 * @this BSTIterator
 * @returns {boolean} - whether we have a next smallest number
 */
BSTIterator.prototype.hasNext = function() {
  return this.idx < this.nums.length
};

/**
 * @this BSTIterator
 * @returns {number} - the next smallest number
 */
BSTIterator.prototype.next = function() {
  if (!this.hasNext()) {
    return null
  }
  return this.nums[this.idx++]
};

var root = { val: 2, left: {val: 1}, right: {val:3} }
var iter = new BSTIterator(root)
console.log(iter.hasNext());
console.log(iter.next());
console.log(iter.hasNext());
console.log(iter.next());
console.log(iter.hasNext());
console.log(iter.next());
console.log(iter.hasNext());
console.log(iter.next());
var sum = function (root) {
  if (!root) {
    return 0
  }

  return root.val + sum(root.left) + sum(root.right)
}

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var findTilt = function (root) {
  // console.log('%j', root)
  if (!root) {
    return 0
  }

  const left = sum(root.left)
  const right = sum(root.right)
  // console.log({ left, right, tile: Math.abs(left - right) });
  
  return Math.abs(left - right) + findTilt(root.left) + findTilt(root.right)
};

var assert = require('assert');
var root = {
  "val": 1,
  "right": {
    "val": 3,
    "right": null,
    "left": {
      "val": 5,
      "right": null,
      "left": null
    }
  },
  "left": {
    "val": 2,
    "right": null,
    "left": {
      "val": 4,
      "right": null,
      "left": null
    }
  }
}
assert.equal(findTilt(root), 11)
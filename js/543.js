var maxDepth = function (root, result) {
  if (!root) {
    return 0
  }

  const leftDepth = maxDepth(root.left, result)
  const rightDepth = maxDepth(root.right, result)
  const diameter = leftDepth + rightDepth
  if (result.max < diameter) {
    result.max = diameter
  }

  return 1 + Math.max(leftDepth, rightDepth)
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
var diameterOfBinaryTree = function (root) {
  if (!root) {
    return 0
  }

  const result = { max: 0 }
  maxDepth(root, result)
  return result.max
};

var assert = require('assert')
var { createTree } = require('./util.tree')
var root = {"val":1,"right":{"val":3,"right":null,"left":null},"left":{"val":2,"right":{"val":5,"right":null,"left":null},"left":{"val":4,"right":null,"left":null}}}
assert.equal(diameterOfBinaryTree(root), 3)
var root = createTree([4,-7,-3,null,null,-9,-3,9,-7,-4,null,6,null,-6,-6,null,null,0,6,5,null,9,null,null,-1,-4,null,null,null,-2])
assert.equal(diameterOfBinaryTree(root), 8)
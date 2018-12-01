var DFS = function (root, depth, result) {
  if (!root) {
    return
  }

  DFS(root.right, depth + 1, result)
  if (result[depth] === undefined) {
    result[depth] = root.val
  }
  DFS(root.left, depth + 1, result)
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
 * @return {number[]}
 */
var rightSideView = function (root) {
  const result = []
  DFS(root, 0, result)
  return result
};

var assert = require('assert');
var root = {"val":1,"right":{"val":3,"right":{"val":4,"right":null,"left":null},"left":null},"left":{"val":2,"right":{"val":5,"right":null,"left":null},"left":null}}
assert.deepEqual(rightSideView(root), [1,3,4])
var root = {"val":1,"right":{"val":3,"right":null,"left":null},"left":{"val":2,"right":{"val":5,"right":null,"left":null},"left":null}}
assert.deepEqual(rightSideView(root), [1,3,5])
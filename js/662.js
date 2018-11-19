var DFS = function (root, depth, idx, level) {
  if (!root) {
    return
  }
  // console.log('DFS', { val: root.val, depth, idx });
  level[depth] = level[depth] || []
  level[depth].push(idx)
  DFS(root.left, depth + 1, 2 * (idx + 1) - 1, level)
  DFS(root.right, depth + 1, 2 * (idx + 1), level)
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
var widthOfBinaryTree = function (root) {
  let level = []
  DFS(root, 0, 0, level)
  let maxWidth = 0
  // console.log(level);
  for (let i = 0; i < level.length; i++) {
    // console.log(level[i]);
    const max = Math.max.apply(null, level[i])
    const min = Math.min.apply(null, level[i])
    const width = max - min + 1
    if (maxWidth < width) {
      maxWidth = width
    }
  }
  return maxWidth
};

var assert = require('assert');
var root = {"val":1,"right":{"val":2,"right":{"val":9,"right":null,"left":null},"left":null},"left":{"val":3,"right":{"val":3,"right":null,"left":null},"left":{"val":5,"right":null,"left":null}}}
assert.equal(widthOfBinaryTree(root), 4)
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
var sumOfLeftLeaves = function(root, isLeft = false) {
  if (!root) {
    return 0
  }

  if (!root.left && !root.right) {
    if (isLeft) {
      return root.val
    } else {
      return 0
    }
  }
  return sumOfLeftLeaves(root.left, true) + sumOfLeftLeaves(root.right, false)
};

var root = null
console.log(sumOfLeftLeaves(root), 0);
var root = {val: 1}
console.log(sumOfLeftLeaves(root), 0);
var root = { val: 1, left: { val: 2 }, right: { val: 3 } }
console.log(sumOfLeftLeaves(root), 2);
var root = {"val":3,"right":{"val":20,"right":{"val":7,"right":null,"left":null},"left":{"val":15,"right":null,"left":null}},"left":{"val":9,"right":null,"left":null}}
console.log(sumOfLeftLeaves(root), 24);
const { createTree } = require("./util.tree");
const { equal } = require("assert");

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

function solve (root, rootVals) {
  if (!root) return 0

  let ret = 0
  for (let i = 0; i < rootVals.length; i++) {
    ret = Math.max(ret, Math.abs(root.val - rootVals[i]))
  }

  rootVals.push(root.val)
  ret = Math.max(
    ret,
    solve(root.left, rootVals),
    solve(root.right, rootVals)
  )
  rootVals.pop()
  return ret
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxAncestorDiff = function(root) {
  // console.log(JSON.stringify(root));
  return solve(root, root && [root.val])
};

var root = createTree([8,3,10,1,6,null,14,null,null,4,7,13])
var result = 7
equal(maxAncestorDiff(root), result)
var root = createTree([1,null,2,null,0,3])
var result = 3
equal(maxAncestorDiff(root), result)

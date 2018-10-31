var isAncestor = function (root, p) {
  if (!root) {
    return false
  }
  return root.val === p.val || isAncestor(root.left, p) || isAncestor(root.right, p)
}

var isCommonAncestor = function (root, p, q) {
  return isAncestor(root, p) && isAncestor(root, q)
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
  
  if (isCommonAncestor(root.left, p, q)) {
    return lowestCommonAncestor(root.left, p, q)
  } else if (isCommonAncestor(root.right, p, q)) {
    return lowestCommonAncestor(root.right, p, q)
  } else {
    return root
  }
};
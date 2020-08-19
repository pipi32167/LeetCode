const { TreeNode } = require("./util.tree");

/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
function solve (preorder, inorder, i, j) {
  
  if(preorder.length === 0 || i > j) 
    return null

  const val = preorder.shift()
  const idx = inorder.indexOf(val)
  if (idx < i || idx > j) return null

  const node = new TreeNode(val)
  node.left = solve(preorder, inorder, i, idx - 1)
  node.right = solve(preorder, inorder, idx + 1, j)
  return node
}


/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
  return solve(preorder, inorder, 0, inorder.length - 1)
};

var preorder = [3,9,20,15,7]
var inorder = [9,3,15,20,7]
console.log(buildTree(preorder, inorder));
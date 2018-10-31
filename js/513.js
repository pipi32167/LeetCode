
var DFS = function (root, depth, result) {
  
  if (!root) {
    return
  }

  DFS(root.left, depth + 1, result)
  if (!root.left && !root.right && result.maxDepth < depth) {
    result.maxDepth = depth
    result.val = root.val
  }
  DFS(root.right, depth + 1, result)
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
var findBottomLeftValue = function(root) {
  
  var result = { maxDepth: -1, val: null }
  DFS(root, 0, result)
  return result.val
};
var root = {"val":2,"right":{"val":3,"right":null,"left":null},"left":{"val":1,"right":null,"left":null}}
console.log(findBottomLeftValue(root), 1);
var root = {"val":0}
console.log(findBottomLeftValue(root), 0);


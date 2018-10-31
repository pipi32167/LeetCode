
var DFS = function (root, result, result2) {
  if (!root) {
    return 0
  }

  result.push(root.val)
  // console.log(result);
  if (!root.left && !root.right) {
    result2.push(result.slice(0).join('->'))
  }

  // console.log(result);
  DFS(root.left, result, result2)
  DFS(root.right, result, result2)
  result.pop()
  // console.log(result);
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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
  console.log('%j', root)
  var result = [], result2 = []
  DFS(root, result, result2)
  // console.log({result, result2});
  return result2
};
var root = {"val":5,"right":{"val":8,"right":{"val":4,"right":{"val":1,"right":null,"left":null},"left":null},"left":{"val":13,"right":null,"left":null}},"left":{"val":4,"right":null,"left":{"val":11,"right":{"val":2,"right":null,"left":null},"left":{"val":7,"right":null,"left":null}}}}
console.log(binaryTreePaths(root), true);
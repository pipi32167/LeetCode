/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

var DFS = function (root, prefix, result) {
  if(!root) {
    return
  }

  if(!root.left && !root.right) {
    prefix.push(root.val)
    result.push(Number(prefix.join('')))
    prefix.pop()
    return
  }

  prefix.push(root.val)
  DFS(root.left, prefix, result)
  DFS(root.right, prefix, result)
  prefix.pop()
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumNumbers = function(root) {
  var result = []
  DFS(root, [], result)
  // console.log(result);
  
  return result.reduce((memo, elem) => memo + elem, 0)
};

var root = {"val":1,"right":{"val":3,"right":null,"left":null},"left":{"val":2,"right":null,"left":null}}
console.log(sumNumbers(root), 25);


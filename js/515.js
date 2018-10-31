var DFS = function (root, depth, result) {

  if (!root) {
    return
  }

  DFS(root.left, depth + 1, result)
  if (result[depth] === undefined) {
    result[depth] = root.val
  } else if (result[depth] < root.val) {
    result[depth] = root.val
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
 * @return {number[]}
 */
var largestValues = function(root) {
  
  // console.log('%j', root);
  
  var result = []
  DFS(root, 0, result)
  return result
};

var root = {"val":1,"right":{"val":2,"right":{"val":9,"right":null,"left":null},"left":null},"left":{"val":3,"right":{"val":3,"right":null,"left":null},"left":{"val":5,"right":null,"left":null}}}
console.log(largestValues(root));
var root = {"val":5,"right":null,"left":null}
console.log(largestValues(root));
var root = null
console.log(largestValues(root));
var root = {"val":-1,"right":null,"left":null}
console.log(largestValues(root));
var root = require('./515_input')
console.log(largestValues(root));
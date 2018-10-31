var doPostorderTraversal = function (root, result) {
  
  if (!root) {
    return
  }
  doPostorderTraversal(root.left, result)
  doPostorderTraversal(root.right, result)
  result.push(root.val)
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
var postorderTraversal = function(root) {
    
  var result = []
  doPostorderTraversal(root, result)
  return result
};

var root = {
  "val": 1,
  "right": {
    "val": 2,
    "right": null,
    "left": {
      "val": 3,
      "right": null,
      "left": null
    }
  },
  "left": null
}
console.log(postorderTraversal(root), [3,2,1]);

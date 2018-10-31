// var iterateByInOrder = function (root, result) {

//   if (!root) {
//     return
//   }

//   iterateByInOrder(root.left, result)
//   result.push(root.val)
//   iterateByInOrder(root.right, result)
// }

// /**
//  * Definition for a binary tree node.
//  * function TreeNode(val) {
//  *     this.val = val;
//  *     this.left = this.right = null;
//  * }
//  */
// /**
//  * @param {TreeNode} root
//  * @return {number[]}
//  */
// var inorderTraversal = function(root) {

//   console.log('%j', root)
//   var result = []  
//   iterateByInOrder(root, result)
//   return result
// };


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
var inorderTraversal = function (root) {

  var result = []
  var stack = []
  while(root || stack.length > 0) {

    while(root) {
      stack.push(root)
      root = root.left
    }

    if (stack.length > 0) {
      root = stack.pop()
      result.push(root.val)
      root = root.right
    }
  }

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
console.log(inorderTraversal(root));
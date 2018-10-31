/**
 * Definition for a binary tree node.
 * function (val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {

  if (!root) {
    return 0;
  }

  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right))
};

console.log(maxDepth( {
  val: 3,
  right: 
    {
     val: 20,
     right:  { val: 7, right: null, left: null },
     left:  { val: 15, right: null, left: null } },
  left:  { val: 9, right: null, left: null } }
));

console.log(maxDepth( {
  val: 3,
  right: null,
  left: null }
));

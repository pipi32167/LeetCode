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
var rob = function(root) {
  if (!root) {
    return 0
  }
  
  return Math.max(
    rob(root.left) + rob(root.right), 
    root.val + 
    rob(root.left && root.left.left) + 
    rob(root.left && root.left.right) +  
    rob(root.right && root.right.left) + 
    rob(root.right && root.right.right)
  )
};

var root = {"val":3,"right":{"val":3,"right":{"val":1,"right":null,"left":null},"left":null},"left":{"val":2,"right":{"val":3,"right":null,"left":null},"left":null}}
console.log(rob(root), 7);
var root = {
  val: 3,
  left: {
    val: 4,
    left: { val: 1 },
    right: { val: 3 },
  },
  right: {
    val: 5,
    right: { val: 1 },
  },
}
console.log(rob(root), 9);
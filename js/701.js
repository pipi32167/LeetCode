
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function(root, val) {
  if (!root) {
    return new TreeNode(val)
  }
  
  if (root.val > val) {
    root.left = insertIntoBST(root.left, val)
  } else {
    root.right = insertIntoBST(root.right, val)
  }
  return root
};

/**
 * Definition for a binary tree node.
 */
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

var root = {"val":4,"right":{"val":7,"right":null,"left":null},"left":{"val":2,"right":{"val":3,"right":null,"left":null},"left":{"val":1,"right":null,"left":null}}}
console.log(insertIntoBST(root, 5));

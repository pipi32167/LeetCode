var insert = function (root, val) {
  if (val === null) {
    return root
  }
  var node = new TreeNode(val)
  if (!root) {
    return node
  }
  if (val < root.val) {
    root.left = insert(root.left, val)
  } else {
    root.right = insert(root.right, val)
  }
  return root
}

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
  if (nums.length === 0) {
    return null
  }
  
  var mid = Math.floor(nums.length / 2)
  var root = new TreeNode(nums[mid])
  root.left = sortedArrayToBST(nums.slice(0, mid))
  root.right = sortedArrayToBST(nums.slice(mid+1))
  return root
};

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

console.log(sortedArrayToBST([-10,-3,0,5,9]));

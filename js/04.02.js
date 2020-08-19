/**
 * Definition for a binary tree node.
*/
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

function mkTree (nums, i, j) {
  
  if (i > j) return null
  if (i == j) return new TreeNode(nums[i])
  const m = Math.floor((i + j) / 2)
  const node = new TreeNode(nums[m])
  node.left = mkTree(nums, i, m - 1)
  node.right = mkTree(nums, m + 1, j)
  return node
}

/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {

  return mkTree(nums, 0, nums.length - 1)
};

console.log(sortedArrayToBST([-10,-3,0,5,9]));
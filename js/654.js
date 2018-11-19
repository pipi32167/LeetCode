var create = function (nums, l, u) {
  if (l > u) {
    return null
  }

  var max = -1,
    maxIdx
  for (let i = l; i <= u; i++) {
    if (max < nums[i]) {
      max = nums[i]
      maxIdx = i
    }
  }

  var root = new TreeNode(nums[maxIdx])
  root.left = create(nums, l, maxIdx - 1)
  root.right = create(nums, maxIdx + 1, u)
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
var constructMaximumBinaryTree = function (nums) {

  return create(nums, 0, nums.length - 1)
};

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

var assert = require('assert');
console.log('%o', constructMaximumBinaryTree([3, 2, 1, 6, 0, 5]))
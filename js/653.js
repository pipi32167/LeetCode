
var depthFirstIterate = function (root, k, nums) {
  
  if (!root || nums[0] + nums[nums.length - 1] >= k) {
    return
  }

  depthFirstIterate(root.left, k, nums)
  nums.push(root.val)
  depthFirstIterate(root.right, k, nums)
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
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function(root, k) {
  
  var nums = []
  depthFirstIterate(root, k, nums)
   
  for(var i = 0; i < nums.length; i++) {
    for(var j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === k) {
        return true
      }
    }
  }

  return false
};

var tree = {"val":5,"right":{"val":6,"right":{"val":7,"right":null,"left":null},"left":null},"left":{"val":3,"right":{"val":4,"right":null,"left":null},"left":{"val":2,"right":null,"left":null}}}
var k = 9
console.log(findTarget(tree, k), true);
var k = 100
console.log(findTarget(tree, k), false);

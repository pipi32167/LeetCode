var findAllLeaves = function (root, leaves) {
  
  if (!root) {
    return
  }

  findAllLeaves(root.left, leaves)
  if (!root.left && !root.right) {
    leaves.push(root.val)
  }
  findAllLeaves(root.right, leaves)
}

var isEqual = function (nums1, nums2) {
  if(nums1.length !== nums2.length) {
    return false
  }
  for(var i = 0; i < nums1.length; i++) {
    if (nums1[i] !== nums2[i]) {
      return false
    }
  }
  return true
}

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function(root1, root2) {
    
  var leaves1 = []
  findAllLeaves(root1, leaves1)
  var leaves2 = []
  findAllLeaves(root2, leaves2)
  // console.log({ leaves1, leaves2 });
  return isEqual(leaves1, leaves2)
};


var root1 = {"val":3,"right":{"val":1,"right":{"val":8,"right":null,"left":null},"left":{"val":9,"right":null,"left":null}},"left":{"val":5,"right":{"val":2,"right":{"val":4,"right":null,"left":null},"left":{"val":7,"right":null,"left":null}},"left":{"val":6,"right":null,"left":null}}}
var root2 = {"val":3,"right":{"val":1,"right":{"val":2,"right":{"val":8,"right":null,"left":null},"left":{"val":9,"right":null,"left":null}},"left":{"val":4,"right":null,"left":null}},"left":{"val":5,"right":{"val":7,"right":null,"left":null},"left":{"val":6,"right":null,"left":null}}}
console.log(leafSimilar(root1, root2));

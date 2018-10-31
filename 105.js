var find = function (nums1, nums2) {
  var result = []
  for(var i = 0; i < nums1.length; i++) {
    if (nums2.indexOf(nums1[i]) >= 0) {
      result.push(nums1[i])
      if (result.length >= nums2.length) {
        break
      }
    }
  }
  return result
}

/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  if (preorder.length === 0) {
    return null
  }
  
  var rootVal = preorder[0]
  var inRootIdx = inorder.indexOf(rootVal)
  var inLeft = inorder.slice(0, inRootIdx)
  var inRight = inorder.slice(inRootIdx+1)
  var preLeft = find(preorder, inLeft)
  var preRight = find(preorder, inRight)
  var root = new TreeNode(rootVal)
  root.left = buildTree(preLeft, inLeft)
  root.right = buildTree(preRight, inRight)
  return root
};

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
var preorder = [3,9,20,15,7]
var inorder = [9,3,15,20,7]
console.log(buildTree(preorder, inorder));
console.log(buildTree([], []));

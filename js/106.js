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
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function (inorder, postorder) {
  // console.log({ inorder, postorder });
  
  if (postorder.length === 0) {
    return null
  }
  
  var rootVal = postorder[postorder.length - 1]
  var inRootIdx = inorder.indexOf(rootVal)
  var inLeft = inorder.slice(0, inRootIdx)
  var inRight = inorder.slice(inRootIdx+1)
  var postLeft = find(postorder, inLeft)
  var postRight = find(postorder, inRight)
  var root = new TreeNode(rootVal)
  root.left = buildTree(inLeft, postLeft)
  root.right = buildTree(inRight, postRight)
  return root
};

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
var inorder = [9,3,15,20,7]
var postorder = [9,15,7,20,3]
console.log(buildTree(inorder, postorder));
console.log(buildTree([], []));

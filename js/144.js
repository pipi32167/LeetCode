var iterate = function (root, result) {
  
  if(!root) {
    return
  }

  result.push(root.val)
  iterate(root.left, result)
  iterate(root.right, result)
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
 * @return {number[]}
 */
var preorderTraversal = function(root) {
  var result = []
  iterate(root, result)
  return result
};

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function(root) {
  if (!root) {
    return []
  }
  var result = [], stack = [root]
  while(stack.length > 0) {
    var r = stack.pop()
    result.push(r.val)
    if (r.right) {
      stack.push(r.right)
    }
    if (r.left) {
      stack.push(r.left)
    }
  }
  return result
};

var root = {"val":1,"right":{"val":2,"right":null,"left":{"val":3,"right":null,"left":null}},"left":null}
console.log(preorderTraversal(root), [1,2,3]);
var root = {
  "val": 1,
  "right": {
    "val": 3,
    "right": { val: 6 },
    "left": { "val": 7 },
  },
  "left": {
    val: 2,
    left: { val: 4 },
    right: { val: 5 },
  }
}
console.log(preorderTraversal(root), [ 1, 2, 4, 5, 3, 7, 6 ] );

var calc = function (nums, sum) {
  var res = 0
  for(var i = nums.length - 1; i >= 0; i--) {
    res += nums[i]
  }
  return res === sum ? 1 : 0
}

var DFS = function (root, sum, result, result2) {
  if (!root) {
    return 0
  }

  result.push(root.val)
  // console.log(result);
  
  if (!root.left && !root.right) {
    result2.count += calc(result, sum)
  }

  // console.log(result);
  DFS(root.left, sum, result, result2)
  DFS(root.right, sum, result, result2)
  result.pop()
  // console.log(result);
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
 * @param {number} sum
 * @return {number}
 */
var hasPathSum = function(root, sum) {
  console.log('%j', root)
  var result = [], result2 = { count: 0 }
  DFS(root, sum, result, result2)
  // console.log({result, result2});
  return result2.count > 0
};

var root = {"val":5,"right":{"val":8,"right":{"val":4,"right":{"val":1,"right":null,"left":null},"left":null},"left":{"val":13,"right":null,"left":null}},"left":{"val":4,"right":null,"left":{"val":11,"right":{"val":2,"right":null,"left":null},"left":{"val":7,"right":null,"left":null}}}}
console.log(hasPathSum(root, 22), true);
var root = {"val":1,"right":null,"left":{"val":2,"right":null,"left":null}}
console.log(hasPathSum(root, 2), false);
var root = {"val":1,"right":null,"left":null}
console.log(hasPathSum(root, 1), true);
var root = {"val":1,"right":{"val":-3,"right":null,"left":{"val":-2,"right":null,"left":null}},"left":{"val":-2,"right":{"val":3,"right":null,"left":null},"left":{"val":1,"right":null,"left":{"val":-1,"right":null,"left":null}}}}
console.log(hasPathSum(root, 1), false);
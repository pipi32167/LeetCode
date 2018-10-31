

var depthFirstIterate = function (root, k, result) {
  
  if (!root || result.length >= k) {
    return
  }
  depthFirstIterate(root.left, k, result)
  result.push(root.val)
  depthFirstIterate(root.right, k, result)
}

// var root = {"val":3,"right":{"val":4,"right":null,"left":null},"left":{"val":1,"right":{"val":2,"right":null,"left":null},"left":null}}
// var k = 0
// var result = []
// depthFirstIterate(root, k, result)
// console.log(result);


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
 * @return {number}
 */
var kthSmallest = function(root, k) {
  var result = []
  depthFirstIterate(root, k, result)
  return result[k - 1]
};

var root = {"val":3,"right":{"val":4,"right":null,"left":null},"left":{"val":1,"right":{"val":2,"right":null,"left":null},"left":null}}
var k = 1
console.log(kthSmallest(root, k), 1);


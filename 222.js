var doCount = function (root, result) {
  
  if (!root) {
    return
  }

  doCount(root.left, result)
  result.count++
  doCount(root.right, result)
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
 * @return {number}
 */
var countNodes = function(root) {
  var result = {
    count: 0
  }  
  doCount(root, result)
  return result.count
};

var root = {"val":1,"right":{"val":3,"right":null,"left":{"val":6,"right":null,"left":null}},"left":{"val":2,"right":{"val":5,"right":null,"left":null},"left":{"val":4,"right":null,"left":null}}}
console.log(countNodes(root), 6);



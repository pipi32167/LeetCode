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
var averageOfLevels = function(root) {
  if (!root) {
    return []
  }
  
  var result = [[root]]
  var result2 = []
  while(result[0].length > 0) {
    var res = [], sum = 0
    for(var i = 0; i < result[0].length; i++) {
      var node = result[0][i]
      sum += node.val
      if (node.left) {
        res.push(node.left)
      }
      if (node.right) {
        res.push(node.right)
      }
    }
    result2.push(sum / result[0].length)
    result.unshift(res)
  }

  return result2
};
var root = {"val":3,"right":{"val":20,"right":{"val":7,"right":null,"left":null},"left":{"val":15,"right":null,"left":null}},"left":{"val":9,"right":null,"left":null}}
console.log(averageOfLevels(root));
console.log(averageOfLevels(null));

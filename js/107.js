/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
  if (!root) {
    return []
  }
  
  var result = [[root]]
  while(result[0].length > 0) {
    var res = []
    for(var i = 0; i < result[0].length; i++) {
      var node = result[0][i]
      if (node.left) {
        res.push(node.left)
      }
      if (node.right) {
        res.push(node.right)
      }
    }
    result.unshift(res)
  }

  result.shift()

  var result2 = []
  for(var i = 0; i < result.length; i++) {
    var res = []
    for(var j = 0; j < result[i].length; j++) {
      res.push(result[i][j].val)
    }
    result2.push(res)
  }
  return result2
};

var root = {"val":3,"right":{"val":20,"right":{"val":7,"right":null,"left":null},"left":{"val":15,"right":null,"left":null}},"left":{"val":9,"right":null,"left":null}}
console.log(levelOrderBottom(root));
console.log(levelOrderBottom(null));

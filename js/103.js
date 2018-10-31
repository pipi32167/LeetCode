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
var zigzagLevelOrder = function(root) {
  if (!root) {
    return []
  }
  
  var result = [], level = 0
  var queue = [root]
  while(queue.length > 0) {
    var queue2 = []
    result[level] = []
    for(var i = 0; i < queue.length; i++) {
      var node = queue[i]
      result[level].push(node.val)
      if (node.left) {
        queue2.push(node.left)
      }
      if (node.right) {
        queue2.push(node.right)
      } 
    }
    if (level % 2 === 1) {
      result[level] = result[level].reverse()
    }
    level++
    queue = queue2
    // console.log(level, queue.map(node => node.val));
  }
  return result
};

var root = {"val":3,"right":{"val":20,"right":{"val":7,"right":null,"left":null},"left":{"val":15,"right":null,"left":null}},"left":{"val":9,"right":null,"left":null}}
console.log(zigzagLevelOrder(root));
console.log(zigzagLevelOrder(null));
var root = {val:1,left:{val:2,left:{val:4}},right:{val:3,right:{val:5}}}
console.log(zigzagLevelOrder(root));
var DFS = function (root, nodes) {
  if (!root) {
    return 0
  }

  root.leftMaxSum = DFS(root.left, nodes)
  nodes.push(root)
  root.rightMaxSum = DFS(root.right, nodes)
  root.maxSum = root.val + Math.max(0, root.leftMaxSum, root.rightMaxSum)
  return root.maxSum
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxPathSum = function (root) {

  let nodes = []
  DFS(root, nodes)
  // console.log('%j', root);

  let max = -Math.pow(2, 31)
  for (let i = 0; i < nodes.length; i++) {
    let node = nodes[i]
    let res = node.val + Math.max(
      0,
      node.leftMaxSum,
      node.rightMaxSum,
      node.leftMaxSum + node.rightMaxSum
    )
    if (max < res) {
      max = res
    }
  }

  return max
};


var { createTree } = require('./util.tree')
var root = createTree([1, 2, 3])
console.log(maxPathSum(root) === 6);
var root = createTree([-10,9,20,null,null,15,7])
console.log(maxPathSum(root) === 42);
var root = createTree([1])
console.log(maxPathSum(root) === 1);
var root = createTree([-1])
console.log(maxPathSum(root) === -1);
var root = createTree([5, 4, 8, 11, null, 13, 4, 7, 2, null, null, null, 1])
console.log(maxPathSum(root) === 48);
var root = require('./0124_input')
console.log(maxPathSum(root) , 480);
// // // console.log(root);

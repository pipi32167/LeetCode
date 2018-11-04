let DFS = function (root) {
  if (!root) {
    return ''
  }
  let left = DFS(root.left)
  let right = DFS(root.right)
  if (!left && right) {
    left = '()'
  }
  return `(${root.val}${left}${right})`
}

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} t
 * @return {string}
 */
var tree2str = function (t) {

  let result = []
  result = DFS(t, result)
  result = result.slice(1, result.length-1)
  // console.log(result);
  return result
};

var {
  createTree
} = require('./util.tree')
console.log(tree2str(createTree([1, 2, 3, 4])) === "1(2(4))(3)");
console.log(tree2str(createTree([1, 2, 3, null, 4])) === "1(2()(4))(3)");
var data = require('./606_input')
console.log(tree2str(createTree(data)) === "1(2(4))(3)");

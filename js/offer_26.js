/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

const {
  ok
} = require("assert");
const {
  createTree,
  TreeNode
} = require("./util.tree");


/**
 * @param {TreeNode} A
 * @param {TreeNode} B
 * @return {boolean}
 */
function solve(A, B) {
  //遍历B至空节点
  if (!B)
    return true

  if (!A || A.val !== B.val)
    return false

  return solve(A.left, B.left) && solve(A.right, B.right)
}

/**
 * @param {TreeNode} A
 * @param {TreeNode} B
 * @return {boolean}
 */
function dfs_solve(A, B) {

  return solve(A, B) ||
    A.left != null && dfs_solve(A.left, B) ||
    A.right != null && dfs_solve(A.right, B)
}


/**
 * @param {TreeNode} A
 * @param {TreeNode} B
 * @return {boolean}
 */
var isSubStructure = function (A, B) {
  if (!A || !B) return false

  return dfs_solve(A, B)
};

/**
 * @param {TreeNode} A
 * @param {TreeNode} B
 * @return {boolean}
 */
var isSubStructure = function(A, B) {
  // 约定空树不是任意一个树的子结构
  if(!A || !B) {
      return false;
  }
  return isSameTree(A, B) || isSubStructure(A.left, B) || isSubStructure(A.right, B)
};

/**
* @param {TreeNode} A
* @param {TreeNode} B
* @return {boolean}
*/
var isSameTree = function(A, B) {
  // B子树是空子树 ok
  if(!B) {
      return true;
  }
  // A子树是空子树 且 B 非空，不 ok
  if(!A) {
      return false;
  }
  // 当前节点的值不相等，不 ok
  if(A.val !== B.val) {
      return false;
  }
  // 递归考察左子树、右子树
  return isSameTree(A.left, B.left) && isSameTree(A.right, B.right);
};

var A = createTree([1, 2, 3])
var B = createTree([3, 1])
ok(!isSubStructure(A, B))
var A = createTree([3, 4, 5, 1, 2])
var B = createTree([4, 1])
ok(isSubStructure(A, B))
var A = createTree([3, 5, 0, 3, 4])
var B = createTree([1, -4, 2, -1, 3, -3, -4, 0, -3, -1])
console.log({
  A: JSON.stringify(A),
  B: JSON.stringify(B)
});
ok(!isSubStructure(A, B)) 
var A = {"val":3,"left":{"val":5,"left":{"val":3,"left":null,"right":null},"right":{"val":4,"left":null,"right":null}},"right":{"val":0,"left":null,"right":null}}
var B = {"val":1,"left":{"val":-4,"left":{"val":-1,"left":{"val":0,"left":null,"right":null},"right":{"val":-3,"left":null,"right":null}},"right":{"val":3,"left":{"val":-1,"left":null,"right":null},"right":null}},"right":{"val":2,"left":{"val":-3,"left":null,"right":null},"right":{"val":-4,"left":null,"right":null}}}
ok(!isSubStructure(A, B)) 
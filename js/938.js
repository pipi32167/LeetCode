// var find = function (root, val, fn, result) {
//   if (!root) {
//     return
//   }
//   if (fn(root.val) && result.indexOf(root.val) < 0) {
//     result.push(root.val)
//   }
//   if (root.val < val) {
//     find(root.right, val, fn, result)
//   } else if (root.val > val) {
//     find(root.left, val, fn, result)
//   }
// }

var DFS = function (root, fn, result) {
  if (!root) {
    return
  }

  if (fn(root.val)) {
    result.push(root.val)
  }
  DFS(root.left, fn, result)
  DFS(root.right, fn, result)
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
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
var rangeSumBST = function (root, L, R) {
  console.log(root)

  let result = []
  const fn = val => {
    // console.log({ val, L, R, res: val >= L && val <= R });
    return val >= L && val <= R
  }
  DFS(root, fn, result)
  // find(root, L, fn, result)
  // find(root, R, fn, result)
  // console.log(result);
  return result.reduce((s, e) => s + e, 0)
};

var assert = require('assert');
var root = {"val": 10,"right": {"val": 15,"right": {"val": 18,"right": null,"left": null},"left": null},"left": {"val": 5,"right": {"val": 7,"right": null,"left": null},"left": {"val": 3,"right": null,"left": null}}}
assert.equal(rangeSumBST(root, 7, 15), 32)
var root = {"val":18,"right":{"val":27,"right":{"val":30,"right":null,"left":null},"left":{"val":24,"right":null,"left":{"val":21,"right":null,"left":null}}},"left":{"val":9,"right":{"val":15,"right":null,"left":{"val":12,"right":null,"left":null}},"left":{"val":6,"right":null,"left":{"val":3,"right":null,"left":null}}}}
assert.equal(rangeSumBST(root, 18, 24), 63)
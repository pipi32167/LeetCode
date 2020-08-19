/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

const { ok } = require("assert")


function preIter (root, ret) {

  if (!root) {
    ret.push(null)
    return
  }
  
  ret.push(root.val)
  preIter(root.left, ret)
  preIter(root.right, ret)
}

function postIter (root, ret) {

  if (!root) {
    ret.push(null)
    return
  }
  
  ret.push(root.val)
  postIter(root.right, ret)
  postIter(root.left, ret)
}

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
  const ret1 = [], ret2 = []
  preIter(root, ret1)
  postIter(root, ret2)
  // console.log(ret1);
  // console.log(ret2);
  for (let i = 0; i < ret1.length; i++) 
    if (ret1[i] != ret2[i]) 
      return false
  return true
};

var root = {"val":1,"left":{"val":2,"left":{"val":3,"left":null,"right":null},"right":{"val":4,"left":null,"right":null}},"right":{"val":2,"left":{"val":4,"left":null,"right":null},"right":{"val":3,"left":null,"right":null}}}
ok(isSymmetric(root))
var root = { val: 1, left: { val: 2, right: { val: 3 } }, right: { val: 2, right: { val: 3 } } }
ok(!isSymmetric(root))
var root = { val: 1, left: { val: 2, left: { val: 2 } }, right: { val: 2, left: { val: 2 } } }
ok(!isSymmetric(root))
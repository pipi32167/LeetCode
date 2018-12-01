var doMerge = function (t1, t2) {
  if (!t1 && !t2) {
    return
  }
  const val = (t1 && t1.val || 0) + (t2 && t2.val || 0)
  const node = new TreeNode(val)
  node.left = doMerge(t1 && t1.left, t2 && t2.left)
  node.right = doMerge(t1 && t1.right, t2 && t2.right)
  return node
}

/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */
var mergeTrees = function (t1, t2) {
  
  const res = doMerge(t1, t2)
  // console.log('%o', res);
  return res
};

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}


var assert = require('assert');
assert.deepEqual(mergeTrees(null, null), null)
var t1 = {"val":1,"right":{"val":2,"right":null,"left":null},"left":{"val":3,"right":null,"left":{"val":5,"right":null,"left":null}}}
var t2 = {"val":2,"right":{"val":3,"right":{"val":7,"right":null,"left":null},"left":null},"left":{"val":1,"right":{"val":4,"right":null,"left":null},"left":null}}
// assert.deepEqual(mergeTrees(t1, t2), null)
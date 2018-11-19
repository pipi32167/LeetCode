const assert = require('assert');

/**
 * @param {number[]} pre
 * @param {number[]} post
 * @return {TreeNode}
 */
var construct2 = function (pre, post) {

  // console.log({
  //   pre,
  //   post
  // });

  if (pre.length === 0 || post.length === 0) {
    return null
  }

  assert.equal(pre.length, post.length)

  const rootVal = pre[0]
  const leftVal = pre[1]
  const rightVal = post[post.length - 2]

  // console.log({
  //   leftVal,
  //   rightVal
  // });

  const i1 = 1
  const j1 = pre.indexOf(rightVal)
  const i2 = 0
  const j2 = j1 - i1

  // console.log({ i1, j1, i2, j2 });
  
  let root = new TreeNode(rootVal)
  root.left = construct2(pre.slice(i1, j1), post.slice(i2, j2))
  root.right = construct2(pre.slice(j1), post.slice(j2, post.length - 1))
  return root
}

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} pre
 * @param {number[]} post
 * @return {TreeNode}
 */
var constructFromPrePost = function (pre, post) {
  // const res = construct(pre, 0, pre.length - 1, post, 0, post.length - 1)
  const res = construct2(pre, post)
  // console.log('%o', res);
  return res;
};


function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}


var pre = [1, 2, 4, 5, 3, 6, 7],
  post = [4, 5, 2, 6, 7, 3, 1]
assert.ok(constructFromPrePost(pre, post))
var pre = [1, 2],
  post = [2, 1]
assert.ok(constructFromPrePost(pre, post))
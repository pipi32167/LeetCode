var DFS = function (root, v, d, depth) {
  // console.log('DFS', { v, d, depth });
  
  if (depth < d - 1) {
    if (root) {
      root.left = DFS(root.left, v, d, depth + 1)
      root.right = DFS(root.right, v, d, depth + 1) 
    }
  } else if (depth === d - 1) {
    if (root) {
      let t = root.left
      root.left = new TreeNode(v)
      root.left.left = t
     
      t = root.right
      root.right = new TreeNode(v)
      root.right.right = t
    }
  }
  return root
}

/**
 * @param {TreeNode} root
 * @param {number} v
 * @param {number} d
 * @return {TreeNode}
 */
var addOneRow = function(root, v, d) {
  console.log('%j', root)
  if (d === 1) {
    let res = new TreeNode(v)
    res.left = root
    return res
  }
  return DFS(root, v, d, 1)
};

/**
 * Definition for a binary tree node.
 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

var root = {"val":4,"right":{"val":6,"right":null,"left":{"val":5,"right":null,"left":null}},"left":{"val":2,"right":{"val":1,"right":null,"left":null},"left":{"val":3,"right":null,"left":null}}}
console.log('%o', addOneRow(root, 1, 2));
var root = {"val":4}
console.log('%o', addOneRow(root, 1, 2));
var root = {"val":4, left: {val: 2}}
console.log('%o', addOneRow(root, 1, 2));
var root = {"val":5,"right":null,"left":{"val":3,"right":{"val":2,"right":null,"left":null},"left":{"val":4,"right":{"val":1,"right":null,"left":null},"left":null}}}
console.log('%o', addOneRow(root, 1, 4));
var root = {"val":4,"right":null,"left":{"val":2,"right":{"val":1,"right":null,"left":null},"left":{"val":3,"right":null,"left":null}}}
console.log('%o', addOneRow(root, 1, 3));
var root = {val: 2}
console.log('%o', addOneRow(root, 1, 1));
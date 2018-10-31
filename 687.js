function DFS(root, nodes) {
  if (!root) {
    return 0
  }
  nodes.push(root)
  root.leftMaxPath = DFS(root.left, nodes)
  root.rightMaxPath = DFS(root.right, nodes)
  root.maxPath = 0
  if (root.left && root.left.val === root.val) {
    root.maxPath = root.leftMaxPath + 1
  }
  if (root.right && root.right.val === root.val) {
    root.maxPath = Math.max(root.maxPath, root.rightMaxPath + 1)
  }
  return root.maxPath
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
 * @return {number}
 */
var longestUnivaluePath = function (root) {
  let nodes = []
  DFS(root, nodes)
  // console.log('%j', root);

  let max = 0
  for (let i = 0; i < nodes.length; i++) {
    const node = nodes[i];
    let res = 0
    if (node.left && node.left.val === node.val) {
      res += node.leftMaxPath + 1
    }
    if (node.right && node.right.val === node.val) {
      res += node.rightMaxPath + 1
    }
    if (max < res) {
      max = res
      // console.log(node);
    }
  }
  return max
};
var root = {
  "val": 5,
  "right": {
    "val": 5,
    "right": null,
    "left": {
      "val": 5,
      "right": null,
      "left": null
    }
  },
  "left": {
    "val": 4,
    "right": {
      "val": 1,
      "right": null,
      "left": null
    },
    "left": {
      "val": 1,
      "right": null,
      "left": null
    }
  }
}
console.log(longestUnivaluePath(root) === 2);
var {
  createTree,
  printAsPyramid
} = require('./util.tree')
var root = createTree([1, 1, 1])
console.log(longestUnivaluePath(root) === 2);
var root = createTree([1, 1])
console.log(longestUnivaluePath(root) === 1);
var root = createTree([1, null, 1])
console.log(longestUnivaluePath(root) === 1);
var root = createTree([26, 26, 26, 26, 26, 24, 26, 25, 25, 25, 27, 23, 25, 25, 27, 24, 26, 24, 26, 24, 24, null, 28, null, null, 26, null, null, 26, 26, 28, 25, null, 25, 27, null, null, null, null, null, 23, null, null, 29, 27, null, null, null, null, 25, null, 27, 27, 24, 26, 24, 26, 26, 26, null, 22, 28, null, 26, 26, null, null, 26, null, 28, 28, 25, null, null, null, 25, 25, 25, 27, 25, 25, 27, 25, null, null, null, null, null, null, null, 27, 27, 27, null, null, 27, 29, 24, 26, 26, 26, null, 26, null, 26, null, null, null, 24, 24, 24, null, 26, 24, 26, null, null, null, 26, null, null, null, 28, null, 30, null, 23, 27, null, null, null, null, null, null, null, null, null, null, null, 23, 25, 25, 25, 27, 25, 23, 25, null, null, null, null, null, null, 29, null, null, null, 26, null, 22, null, null, 26, 24, 26, null, 26, 28, null, null, 26, 22, null, null, null, null, null, null, null, null, null, null, 25, 23, null, null, null, null, 27])
// printAsPyramid(root)
console.log(longestUnivaluePath(root) === 4);
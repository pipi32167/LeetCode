var DFS = function (root, result) {

  if (!root) {
    return
  }
  DFS(root.left, result)
  result.push(root.val)
  DFS(root.right, result)
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
 * @return {boolean}
 */
var isValidBST = function (root) {

  console.log(root)
  if (!root) {
    return true
  }

  var result = []
  DFS(root, result)
  // console.log(result);

  for (var i = 0; i < result.length; i++) {
    for (var j = i + 1; j < result.length; j++) {
      if (result[i] >= result[j]) {
        return false
      }
    }
  }
  return true
};

var root = {
  "val": 2,
  "right": {
    "val": 3,
    "right": null,
    "left": null
  },
  "left": {
    "val": 1,
    "right": null,
    "left": null
  }
}
console.log(isValidBST(root), true);
var root = {
  "val": 5,
  "right": {
    "val": 4,
    "right": {
      val: 6,
      left: null,
      right: null,
    },
    "left": {
      val: 3,
      left: null,
      right: null,
    }
  },
  "left": {
    "val": 1,
    "right": null,
    "left": null
  }
}
console.log(isValidBST(root), false);
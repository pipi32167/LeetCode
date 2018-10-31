var isNeedPrune = function (root) {
  if (!root) {
    return true
  }
  return root.val === 0 && isNeedPrune(root.left) && isNeedPrune(root.right)
}

// var root = {val:1}
// console.log(isNeedPrune(root), false);
// var root = {val:1,left:{val:0}}
// console.log(isNeedPrune(root), false);
// var root = {val:1,right:{val:0}}
// console.log(isNeedPrune(root), false);
// var root = {val:0,left:{val:0}}
// console.log(isNeedPrune(root), true);
// var root = {val:0,left:{val:1}}
// console.log(isNeedPrune(root), false);
// var root = {val:0,left:{val:0},right:{val:0}}
// console.log(isNeedPrune(root), true);
// var root = {val:0,left:{val:0},right:{val:1}}
// console.log(isNeedPrune(root), false);


/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var pruneTree = function (root) {

  if (isNeedPrune(root)) {
    return null
  }

  root.left = pruneTree(root.left)
  root.right = pruneTree(root.right)
  return root
};

var root = {
  "val": 1,
  "right": {
    "val": 0,
    "right": {
      "val": 1,
      "right": null,
      "left": null
    },
    "left": {
      "val": 0,
      "right": null,
      "left": null
    }
  },
  "left": null
}

console.log(pruneTree(root));
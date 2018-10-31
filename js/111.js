
var iterTree = function (root, depth, leafDepths) {

  if (root.left == null && root.right == null) {
    leafDepths.push(depth)
    return;
  }

  if (root.left != null) {
    iterTree(root.left, depth + 1, leafDepths)
  }

  if (root.right != null) {
    iterTree(root.right, depth + 1, leafDepths)
  }
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function (root) {
  if (root == null) {
    return 0;
  }
  var leafDepths = []
  iterTree(root, 1, leafDepths);

  return leafDepths.sort(function (a, b) {
    return a - b
  })[0];
};

console.log(minDepth(null), 0);

console.log(minDepth({
  val: 3,
  right: {
    val: 20,
    right: {
      val: 7,
      right: null,
      left: null
    },
    left: {
      val: 15,
      right: null,
      left: null
    }
  },
  left: {
    val: 9,
    right: null,
    left: null
  }
}), 2);
console.log(minDepth({
  val: 3,
  right: null,
  left: null
}), 1);
console.log(minDepth({
  val: 3,
  right: { val: 1, right: null, left: null },
  left: null
}), 2);
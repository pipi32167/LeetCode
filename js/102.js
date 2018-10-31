


var iterTree = function (root, depth, results) {

  results[depth - 1] = results[depth - 1] || [];
  if (root.val != null) {
    results[depth - 1].push(root.val);
  }

  if (root.left == null && root.right == null) {
    return;
  }

  if (root.left != null) {
    iterTree(root.left, depth + 1, results)
  }

  if (root.right != null) {
    iterTree(root.right, depth + 1, results)
  }
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
var levelOrder = function (root) {
  if (root == null) {
    return [];
  }
  var results = [];
  iterTree(root, 1, results);
  return results;
};

console.log(levelOrder(null), []);

console.log(levelOrder({
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
}));
console.log(levelOrder({
  val: 3,
  right: null,
  left: null
}));
console.log(levelOrder({
  val: 3,
  right: { val: 1, right: null, left: null },
  left: null
}));
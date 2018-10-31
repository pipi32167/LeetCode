
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {

  if (!root) {
    return 0;
  }

  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right))
};


/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function (root) {

  if (!root) {
    return true;
  }

  if (!isBalanced(root.left) || !isBalanced(root.right)) {
    return false;
  }

  return Math.abs(maxDepth(root.left) - maxDepth(root.right)) <= 1
};


console.log(isBalanced(null), []);

console.log(isBalanced({
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


console.log(isBalanced({
  val: 3,
  right: {
    val: 20,
    right: {
      val: 7,
      right: {
        val: 20,
        right: {
          val: 7,
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
          left: null
        },
        left: {
          val: 15,
          right: null,
          left: null
        }
      },
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

console.log(isBalanced({
  "val": 1,
  "right": {
    "val": 2,
    "right": {
      "val": 3,
      "right": {
        "val": 4,
        "right": null,
        "left": null
      },
      "left": null
    },
    "left": null
  },
  "left": {
    "val": 2,
    "right": null,
    "left": {
      "val": 3,
      "right": null,
      "left": {
        "val": 4,
        "right": null,
        "left": null
      }
    }
  }
}));
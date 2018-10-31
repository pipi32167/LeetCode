
var isTreeSymmetric = function(left, right) {

  if (!left && !right) {
    return true
  }

  if (!left || !right) {
    return false
  }

  if (left.val !== right.val) {
    return false
  }

  return  isTreeSymmetric(left.left, right.right) && 
          isTreeSymmetric(left.right, right.left)
}

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {

  if (!root) {
    return true
  }

  return isTreeSymmetric(root.left, root.right)
};

var root = {
  "val": 1,
  "right": {
    "val": 2,
    "right": {
      "val": 3,
      "right": null,
      "left": null
    },
    "left": {
      "val": 4,
      "right": null,
      "left": null
    }
  },
  "left": {
    "val": 2,
    "right": {
      "val": 4,
      "right": null,
      "left": null
    },
    "left": {
      "val": 3,
      "right": null,
      "left": null
    }
  }
}
console.log(isSymmetric(root), true);
var root = {
  "val": 1,
  "right": {
    "val": 2,
    "right": {
      "val": 3,
      "right": null,
      "left": null
    },
    "left": null
  },
  "left": {
    "val": 2,
    "right": {
      "val": 3,
      "right": null,
      "left": null
    },
    "left": null
  }
}
console.log(isSymmetric(root), false);

var root = {
  "val": 1,
  "right": {
    "val": 3,
    "right": null,
    "left": {
      "val": 2,
      "right": null,
      "left": null
    }
  },
  "left": {
    "val": 2,
    "right": null,
    "left": {
      "val": 3,
      "right": null,
      "left": null
    }
  }
}

console.log(isSymmetric(root), false);
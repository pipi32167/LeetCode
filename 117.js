/**
 * Definition for binary tree with next pointer.
 * function TreeLinkNode(val) {
 *     this.val = val;
 *     this.left = this.right = this.next = null;
 * }
 */

var DFS = function (root, depth, tmp) {
   
  if (!root) {
    return
  }

  DFS(root.left, depth + 1, tmp)
  if (tmp[depth]) {
    tmp[depth].next = root
  }
  tmp[depth] = root
  DFS(root.right, depth + 1, tmp)
}

/**
 * @param {TreeLinkNode} root
 * @return {void} Do not return anything, modify tree in-place instead.
 */
var connect = function(root) {
  var tmp = {}
  DFS(root, 0, tmp)
  return root
};

var root = {
  val: 1,
  left: {
    val: 2,
  },
  right: {
    val: 3
  },
}
connect(root)
console.log(root.left.next.val, 3);
console.log(root.right.next, undefined);
var root = {
  val: 1,
  left: {
    val: 2,
    left: {
      val: 4,
    },
    right: {
      val: 5
    },
  },
  right: {
    val: 3,
    right: {
      val: 7
    },
  },
}

connect(root)
console.log(root.left.next.val, 3);
console.log(root.right.next, undefined);
console.log(root.left.left.next.val, 5);
console.log(root.left.right.next.val, 7);
console.log(root.right.right.next, undefined);
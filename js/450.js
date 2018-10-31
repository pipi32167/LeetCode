var insert = function (root1, root2) {
  
  if(!root1) {
    return root2
  }

  if (!root2) {
    return root1
  }

  if (root1.val < root2.val) {
    root1.right = insert(root1.right, root2)
  } else {
    root1.left = insert(root1.left, root2)
  }
  return root1
}

// var root1 = { val: 1 }
// var root2 = { val: 2 }
// console.log(insert(null, null));
// console.log(insert(root1, null));
// console.log(insert(null, root2));
// console.log(insert(root1, root2));
// var root1 = { val: 1, left: { val: 2 }, right: { val: 3 } }
// var root2 = { val: 4 }
// console.log(insert(root1, root2));
// var root1 = { val: 3, left: { val: 1 }, right: { val: 5 } }
// var root2 = { val: 4 }
// console.log(insert(root1, root2));
// var root1 = { val: 3, left: { val: 1 }, right: { val: 5 } }
// var root2 = { val: 2 }
// console.log(insert(root1, root2));
// var root1 = { val: 3, left: { val: 2 }, right: { val: 5 } }
// var root2 = { val: 1 }
// console.log(insert(root1, root2));


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function(root, key) {
  
  if (!root) {
    return root
  }

  if (root.val === key) {
    return insert(root.left, root.right)
  }

  if (root.val > key) {
    root.left = deleteNode(root.left, key)
  } else {
    root.right = deleteNode(root.right, key)
  }
  return root
};

var root = {"val":5,"right":{"val":6,"right":{"val":7,"right":null,"left":null},"left":null},"left":{"val":3,"right":{"val":4,"right":null,"left":null},"left":{"val":2,"right":null,"left":null}}}
console.log(deleteNode(root, 3));
var root = {"val":5,"right":{"val":6,"right":{"val":7,"right":null,"left":null},"left":null},"left":{"val":3,"right":{"val":4,"right":null,"left":null},"left":{"val":2,"right":null,"left":null}}}
console.log(deleteNode(root, 5));

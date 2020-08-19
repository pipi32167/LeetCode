const {
  createTree,
  printAsArray,
  TreeNode
} = require("./util.tree");

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

function height(root) {
  if (!root) return 0
  return 1 + Math.max(height(root.left), height(root.right))
}


var swap = function (arr, i, j) {
  var tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
}

var quickSort = function (nums, l, u) {
  if (l >= u) return nums

  var t = nums[l], i = l, j = u+1
  while(true) {
    do { i++ } while(i <= u && nums[i] < t)
    do { j-- } while(nums[j] > t)
    if (i > j) break
    swap(nums, i, j)
  }
  swap(nums, l, j)
  quickSort(nums, l, j - 1)
  quickSort(nums, j + 1, u)
  return nums
}

function inorderTraversalRecursive(root, result) {
  if (!root) return
  inorderTraversalRecursive(root.left, result)
  result.push(root.val)
  inorderTraversalRecursive(root.right, result)
}

function mkTree(result, i, j) {
  if (i > j) return null

  const mid = (i + j) >> 1
  const root = new TreeNode(result[mid])
  root.left = mkTree(result, i, mid - 1)
  root.right = mkTree(result, mid + 1, j)
  return root
}

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var balanceBST = function (root) {
  let result = []
  inorderTraversalRecursive(root, result)
  result.sort((a, b) => a - b)
  // console.log({result});
  return mkTree(result, 0, result.length - 1)
};

let root = createTree([1, null, 2, null, 3, null, 4, null, null])
printAsArray(root)
console.log(height(root.left), height(root.right));
root = balanceBST(root)
console.log(height(root.left), height(root.right));
printAsArray(root)

root = createTree([14, 9, 16, 2, 13])
printAsArray(root)
console.log(height(root.left), height(root.right));
root = balanceBST(root)
console.log(height(root.left), height(root.right));
printAsArray(root)


// root = createTree([1, null, 15, 14, 17, 7, null, null, null, 2, 12, null, 3, 9, null, null, null, null, 11])
// console.log(height(root.left), height(root.right));
// // console.log(JSON.stringify(root));
// root = balanceBST(root)
// console.log(height(root.left), height(root.right));
// // console.log(JSON.stringify(root));

// root = createTree(require("./1382_input").root)
// console.log(height(root.left), height(root.right));
// root = balanceBST(root)
// console.log(height(root.left), height(root.right));
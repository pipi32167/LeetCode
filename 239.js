var TreeNode = function (val) {
  this.val = val
  this.left = this.right = null
}

var insert = function (root, val) {
  if (!root) {
    return new TreeNode(val)
  }
  if (root.val >= val) {
    root.left = insert(root.left, val)
  } else {
    root.right = insert(root.right, val)
  }
  return root
}

var remove = function (root, val) {
  if(!root) {
    return root
  }

  if (root.val === val) {
    if (!root.left) {
      root = root.right
    } else {
      var right = root.right
      root = root.left
      var now = root
      while(now.right) {
        now = now.right
      }
      now.right = right
    }
  } else if (root.val > val) {
    root.left = remove(root.left, val)
  } else {
    root.right = remove(root.right, val)
  }
  return root
}

var max = function (root) {
  if (root.right) {
    return max(root.right)
  }
  return root.val
}

// var root = null
// root = insert(root, 5)
// root = insert(root, 1)
// root = insert(root, 2)
// root = insert(root, 3)
// root = insert(root, 4)
// root = insert(root, 5)
// root = insert(root, 6)
// root = insert(root, 7)
// root = insert(root, 8)
// root = insert(root, 9)
// console.log(max(root));
// console.log('%j', root);
// root = remove(root, 5)
// console.log('%j', root);
// console.log(max(root));

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
  var dp = new Array(nums.length + 1).fill(0)  
  var sum = 0
  var result = []
  var root = null
  for(var i = 0; i < nums.length; i++) {
    root = insert(root, nums[i])
    if (i >= k) {
      root = remove(root, nums[i-k])
    }
    if (i >= k-1) {
      result.push(max(root))
    }
  }
  return result  
};

var nums = [1,3,-1,-3,5,3,6,7], k = 3
console.log(maxSlidingWindow(nums, k), [3,3,5,5,6,7]);
var nums = require('./239_input'), k = 100
maxSlidingWindow(nums, k)

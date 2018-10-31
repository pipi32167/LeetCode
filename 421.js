var Node = function (level) {
  this.level = level
  this.val = -1
  this.isNum = false
  this.left = this.right = null
}

var add = function (root, val, i) {
  if (!root) {
    root = new Node(i)
  }
  var res = val >> i
  if (res <= 1) {
    var node
    if (res & 1) {
      node = root.left = root.left || new Node(i+1)
    } else {
      node = root.right = root.right || new Node(i+1)
    }
    node.isNum = true
    node.val = val
  } else {
    if (val & 1) {
      root.left = add(root.left, val, i+1)
    } else {
      root.right = add(root.right, val, i+1)
    }
  }
  return root
}

var iterate = function (root, result) {
  if(!root) {
    return 
  } 

  iterate(root.left, result)
  if (root.isNum) {
    result.push(root.val)
  }
  iterate(root.right, result)
}

var Tree = function (nums) {
  var root = null
  for(var i = 0; i < nums.length; i++) {
    root = add(root, nums[i], 0)
  }
  this.root = root
}


/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaximumXOR = function(nums) {
  
  var tree = new Tree(nums)
  var result = []
  iterate(tree.root, result)
  return result
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaximumXOR = function(nums) {
  
  var max = 0
  for(var i = 0; i < nums.length; i++) {
    for(var j = i+1; j < nums.length; j++) {
      var res = nums[i] ^ nums[j]
      if (max < res) {
        max = res
      }
    }
  }

  return max
};

console.log(findMaximumXOR([10, 8]), 28);
// console.log(findMaximumXOR([3, 10, 5, 25, 2, 8]), 28);
// var { range } = require('./util.underscore')
// console.log(findMaximumXOR(range(1, 50001)), 65535);